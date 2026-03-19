import { html2pdf } from 'html2pdf.js';

export const exportToPdf = (resumeElement) => {
    const element = document.getElementById(resumeElement);
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
};