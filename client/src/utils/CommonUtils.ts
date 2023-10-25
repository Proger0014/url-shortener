const CommonUtils = {
  getRandomNum: (max: number) => Math.floor(Math.random() * max),
  getRandomNumDefault: () => CommonUtils.getRandomNum(1_000_000_000),
}

export default CommonUtils;