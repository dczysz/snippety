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
      const time = new Date()
        .getTime()
        .toString()
        .substring(5);

      link.setAttribute('download', `snippety-${time}.${type}`);
      link.setAttribute('href', uri);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(err => {
      throw new Error(err);
    });
};

export default save;
