//Intro Title
//TODO add downloadable resume and photo

export default function Intro() {
  const pdfUrl = '../resume/GayleHoeferResume.html';

  const handleDownload = () => {
    // Open the PDF in a new tab
    window.open(pdfUrl, 'test');

    // Create an anchor element and set its attributes
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Gayle_Hoefer_Resume.pdf';

    // Append the anchor to the document body and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Remove the anchor from the document after the click event
    document.body.removeChild(link);
  }
  return (
    <div className="bg-cyan-700 mt-10">
      <h1 className="font-bold">Gayle Hoefer</h1>
      <img ></img>
      <h2 className="font-semibold">Software Engineer</h2>
      <button
        className="bg-white text-black rounded p-1 m-2"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
}
