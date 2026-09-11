import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadPortfolioAsPDF() {
  const element = document.body;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = pdfWidth / imgWidth;
  const scaledHeight = imgHeight * ratio;

  let heightLeft = scaledHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, pdfWidth, scaledHeight);
  heightLeft -= pdfHeight;

  while (heightLeft > 0) {
    position = heightLeft - scaledHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, scaledHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save("Megha_More_Portfolio.pdf");
}