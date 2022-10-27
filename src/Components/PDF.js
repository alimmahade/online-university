import { useRef } from 'react';
import { jsPDF } from 'jspdf';

export default function PDF() {
    const pdfRef = useRef(null);

    const handleDownload = () => {
        const content = pdfRef.current;

        const doc = new jsPDF();
        doc.html(content, {
            callback: function (doc) {
                doc.save('sample.pdf');
            }
        });
    };

    return (
        <div>
            <header ref={pdfRef}>
                <div>HTML, CSS, BOOTSRAP, JAVASCRIPT, REACT</div>
                <div>HTML, CSS, BOOTSRAP, JAVASCRIPT, REACT</div>
                <div>HTML, CSS, BOOTSRAP, JAVASCRIPT, REACT</div>
                <div>HTML, CSS, BOOTSRAP, JAVASCRIPT, REACT</div>
                <div>HTML, CSS, BOOTSRAP, JAVASCRIPT, REACT</div>
                <div>HTML, CSS, BOOTSRAP, JAVASCRIPT, REACT</div>
            </header>
            <footer>
                <button onClick={handleDownload} className='btn-secondary p-2 border-2 rounded-lg'>Download Pdf</button>
            </footer>
        </div>
    );
}