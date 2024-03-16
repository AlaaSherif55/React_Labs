import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComp({contentRender,dataValue, text, now}) {
  return (
    contentRender(dataValue, text, now)
  );
}

export default ProgressBarComp;