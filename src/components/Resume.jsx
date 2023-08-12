import React from 'react'

import { SectionWrapper } from '../hoc';

const Resume = () => {

    const downloadResume = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = 'public/GauravRuhelaCV.pdf';
        downloadLink.download = 'GauravRuhelaCV.pdf';
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <div onClick={downloadResume}/>
    )
}

// export default SectionWrapper(Resume,'resume');
export default Resume;