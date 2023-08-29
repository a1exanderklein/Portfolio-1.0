function openLinkedIn() {
    window.open("https://www.linkedin.com/in/alexanderkleincs/");
}

function openGithub() {
    window.open("https://github.com/a1exanderklein");
}

function openEmail() {
    window.open("mailto:alexandergeorgeklein@gmail.com");
}

function downloadResume() {
    // URL of the PDF file
    const pdfUrl = 'assets/klein.alexander.resume.pdf';
    
    // Create a temporary <a> element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'klein.alexander.resume.pdf'; // Specify the filename
    
    // Simulate a click on the link to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up resources after the download link is clicked
    document.body.removeChild(downloadLink);
}