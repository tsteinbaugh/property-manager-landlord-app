export async function readLeaseFileToText(file) {
  if (!file) return "";
  const ext = file.name.toLowerCase().split(".").pop();
  if (ext === "pdf") return pdfToText(file);
  if (ext === "docx") return docxToText(file);
  return await file.text().catch(() => "");
}

async function pdfToText(file) {
  const pdfjsLib = await import("pdfjs-dist/build/pdf");
  const worker = await import("pdfjs-dist/build/pdf.worker.mjs");
  pdfjsLib.GlobalWorkerOptions.workerSrc = worker;
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  let fullText = "";
  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const strings = content.items.map((it) => it.str);
    fullText += strings.join(" ") + "\n";
  }
  return fullText;
}

async function docxToText(file) {
  const { default: mammoth } = await import("mammoth");
  const buf = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer: buf });
  return (result?.value || "").trim();
}
