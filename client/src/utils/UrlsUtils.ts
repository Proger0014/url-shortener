import CommonUtils from "./CommonUtils";

export default {
  getBaseUri: () => import.meta.url.slice(0, import.meta.url.indexOf("/src")),
  redirect: (target: string, replace: boolean = false) => {
    if (replace) {
      window.location.replace(target);
    } else{
      window.location.assign(target);
    }
  },
  countdown: (countdownFunc: () => void) => {
    setTimeout(countdownFunc, 1000);
  },
  fixUri: (uri: string) => {
    const startsWith = ["https://", "http://"];

    let newUri = uri;

    console.log(uri);
    

    if (!CommonUtils.any<string>(startsWith, (start) => uri.startsWith(start))) {
      newUri = `https://${newUri}`;
    }

    return newUri;
  }
}