import html2canvas from 'html2canvas';

const save = (el, type) => {
  const options = {
    width: el.offsetWidth,
    height: el.offsetHeight,
    background: 'transparent',
  };

  html2canvas(el, options)
    .then(canvas => {
      // https://stackoverflow.com/questions/11112321/
      const src = canvas.toDataURL(`image/${type};base64`);
      const uri = src.replace(
        /^data:image\/[^;]/,
        'data:application/octet-stream'
      );

      const link = document.createElement('a');
      link.setAttribute('download', `snippy.${type}`);
      link.setAttribute('href', uri);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(err => console.error(err));
};

export default save;
