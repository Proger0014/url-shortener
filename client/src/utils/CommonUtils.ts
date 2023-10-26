const CommonUtils = {
  getRandomNum: (max: number) => Math.floor(Math.random() * max),
  getRandomNumDefault: () => CommonUtils.getRandomNum(1_000_000_000),
  any: <T>(source: T[], predicate: (item: T) => boolean) => {
    for (let i = 0; i < source.length; i++) {
      if (predicate(source[i])) {
        return true;
      }
    }

    return false;
  },
  all: <T>(source: T[], predicate: (item: T) => boolean) => {
    for (let i = 0; i < source.length; i++) {
      if (!predicate(source[i])) {
        return false;
      }
    }

    return true;
  }
}

export default CommonUtils;