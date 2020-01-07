import html2canvas from 'html2canvas';

const save = (
  el: HTMLElement | null,
  type: string,
  hideBackground: boolean,
  callback: () => void
) => {
  if (!el) return;

  const options = {
    width: el.offsetWidth,
    height: el.offsetHeight,
    backgroundColor: 'transparent',
  };

  // Hide background image if it's transparent
  const initialBg = el.style.backgroundImage;
  if (hideBackground) {
    el.style.backgroundImage = 'none';
  }

  html2canvas(el, options)
    .then(canvas => {
      // Reset background
      el.style.backgroundImage = initialBg;

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

      callback && callback();
    })
    .catch(err => {
      throw new Error(err);
    });
};

export default save;
