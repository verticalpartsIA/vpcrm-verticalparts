import {g as s, y as o} from "./i18n-DlHefWMF.js";
const e = async () => {
    const t = await s();
    return t.youappHost.includes("youmind.ai") ? o[0] : t.youappHost
}
  , n = async () => (await s()).youwebHost;
export {e as a, n as g};
