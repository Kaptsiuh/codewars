function domainName(url) {
  try {
    if (new URL(url).host.replace(/\..*/, '') === 'www') {
      return new URL(url).host.replace(/^www\.(.*?)\..*$/, '$1');
    }
    return new URL(url).host.replace(/\..*/, '');
  } catch (err) {
    if (url.replace(/\..*/, '') === 'www') {
      return url.replace(/^www\.(.*?)\..*$/, '$1');
    }
    return url.replace(/\..*/, '');
  }
}
