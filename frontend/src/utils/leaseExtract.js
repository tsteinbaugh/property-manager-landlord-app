export function extractLeaseFields(rawText) {
  const text = (rawText || "").replace(/\u00A0/g, " ").trim();
  const fields = {
    startDateISO: null, months: null, dueDay: null, monthlyRent: null,
    petRentEnabled: false, petRentAmount: 0, securityDeposit: 0,
    firstMonthPrepaid: false, lastMonthPrepaid: false, graceDays: 7,
    lateFeePolicy: { type: "flat", value: 0 }, otherRecurring: [],
  };
  const matches = {};

  const monthMap = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
  const toISO = (m,d,y)=>{ const yy=Number(y.length===2?(Number(y)>70?`19${y}`:`20${y}`):y); const date=new Date(yy, Number(m)-1, Number(d)); return isNaN(+date)?null:date.toISOString().slice(0,10); };
  const currency = (s)=> Number(String(s).replace(/[^0-9.]/g, ""));

  const dateMDY = /(?:(?:on|starting|commencing|begin(?:s|ning)?|from)\s*)?(\b\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})\b/i;
  const dateLong = /(?:(?:on|starting|commencing|begin(?:s|ning)?|from)\s*)?(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{2,4})/i;
  const tryDate = (s)=>{ if(!s) return null; let m=s.match(dateMDY); if(m) return toISO(m[1],m[2],m[3]); m=s.match(dateLong); if(m) return toISO(monthMap[m[1]],m[2],m[3]); return null; };

  const mStart = text.match(/lease\s*(?:start|commencement)\s*(?:date)?[:\-]?\s*(.*)$/im) || text.match(/commenc(?:e|ement)\s*on\s*(.*)$/i);
  const startISO = tryDate(mStart?.[1]) || tryDate(text); if (startISO) { fields.startDateISO=startISO; matches.startDate={value:startISO,conf:0.6}; }

  let mDur = text.match(/\b(?:term|duration)\s*(?:of\s*the\s*lease)?\s*[:\-]?\s*(\d{1,2})\s*month/i);
  if (mDur) { fields.months = Number(mDur[1]); matches.months = { value: fields.months, conf: 0.8 }; }
  const mEnd = text.match(/\b(?:end(?:s|ing)?|termination|expires?)\s*(?:date)?[:\-]?\s*(.*)$/im);
  const endISO = tryDate(mEnd?.[1]);
  if (!fields.months && startISO && endISO) {
    const a=new Date(startISO), b=new Date(endISO);
    const months=(b.getFullYear()-a.getFullYear())*12 + (b.getMonth()-a.getMonth()) + 1;
    if (months>0 && months<60) { fields.months = months; matches.months={value:months,conf:0.55}; }
  }

  const mDue = text.match(/\b(?:rent\s*is\s*due|due\s*date|on\s*the)\s*(\d{1,2})(?:st|nd|rd|th)?\s*(?:of\s*each\s*month|monthly)?/i);
  if (mDue) { fields.dueDay = Number(mDue[1]); matches.dueDay = { value: fields.dueDay, conf: 0.8 }; }

  const mRent = text.match(/\b(?:monthly\s*rent|rent\s*amount|rent)\s*(?:is|:)?\s*\$?\s*([0-9,]+(?:\.[0-9]{2})?)/i);
  if (mRent) { fields.monthlyRent = currency(mRent[1]); matches.monthlyRent = { value: fields.monthlyRent, conf: 0.85 }; }

  const mPetRent = text.match(/\bpet\s*rent\b[^\n$]*\$\s*([0-9,]+(?:\.[0-9]{2})?)/i);
  if (mPetRent) { fields.petRentEnabled = true; fields.petRentAmount = currency(mPetRent[1]); matches.petRent = { value: fields.petRentAmount, conf: 0.75 }; }

  const mSec = text.match(/\b(?:security\s*deposit|deposit)\s*(?:is|:)?\s*\$?\s*([0-9,]+(?:\.[0-9]{2})?)/i);
  if (mSec) { fields.securityDeposit = currency(mSec[1]); matches.securityDeposit = { value: fields.securityDeposit, conf: 0.85 }; }

  if (/\bfirst\s+month(?:'s)?\s+(?:rent\s+)?prepaid\b/i.test(text)) { fields.firstMonthPrepaid = true; }
  if (/\blast\s+month(?:'s)?\s+(?:rent\s+)?prepaid\b/i.test(text)) { fields.lastMonthPrepaid = true; }

  const mGrace = text.match(/\bgrace\s*period\b[^\d]*(\d{1,2})\s*day/i);
  if (mGrace) { fields.graceDays = Number(mGrace[1]); }

  const mLateFlat = text.match(/\blate\s*fee\b[^%\n]*\$\s*([0-9,]+(?:\.[0-9]{2})?)/i);
  const mLatePct = text.match(/\blate\s*fee\b[^\n]*?(\d{1,2})\s*%/i);
  if (mLateFlat) { fields.lateFeePolicy = { type: 'flat', value: currency(mLateFlat[1]) }; }
  else if (mLatePct) { fields.lateFeePolicy = { type: 'percent', value: Number(mLatePct[1]) }; }

  const utilBlock = text.match(/\butilities?\b[\s\S]{0,200}/i);
  if (utilBlock) {
    const utils = [];
    if (/water/i.test(utilBlock[0])) utils.push({ name: 'Water', amount: 0 });
    if (/sewer|wastewater/i.test(utilBlock[0])) utils.push({ name: 'Sewer', amount: 0 });
    if (/trash|garbage/i.test(utilBlock[0])) utils.push({ name: 'Trash', amount: 0 });
    if (/gas|heat/i.test(utilBlock[0])) utils.push({ name: 'Gas', amount: 0 });
    if (/electric/i.test(utilBlock[0])) utils.push({ name: 'Electric', amount: 0 });
    if (/hoa/i.test(utilBlock[0])) utils.push({ name: 'HOA', amount: 0 });
    if (utils.length) { fields.otherRecurring = utils; }
  }

  return { fields, matches };
}
