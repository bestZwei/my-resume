import React from "react";

export const initialState = {
  profile: {
    name: "ZWEI",
    about: "热爱，是不歇的动力",
    email: "post@zwei.de.eu.org",
    mobile: "190********",
    github: "https://github.com/bestZwei",
    home: "https://zwei.de.eu.org",
    workPlace: "广州",
    positionTitle: "前端工程师/IT安全工程师",
  },
  avatar: {
    url: "https://pics.sputnik.cloudns.ch/file/b88bb465fb46793731d2f.png",
    display: true,
    circle: true,
    theme: "1",
  },
  skillList: [
    {
      name: "HTML / CSS",
      desc: "",
      level: 3,
    },
    {
      name: "TypeScript / JavaScript",
      desc: "",
      level: 2,
    },
    {
      name: "Java",
      desc: "",
      level: 4,
    },
    {
      name: "C 语言",
      desc: "",
      level: 4,
    },
    {
      name: "Python",
      desc: "",
      level: 3,
    },
  ],
  educationList: [
    {
      time: ["2022.09", "2026.06"],
      school: "广东工业大学",
      major: "计算机科学",
      degree: "本科",
    },
  ],
  awardList: [
    {
      info: "英语 CET6",
      time: "2024",
    },
    {
      info: "德语 欧标 B2",
      time: "2020.10",
    },
  ],
  workExpList: [
    {
      company: "LibreDev",
      department: "",
      time: ["2024.05", "至今"],
      desc: "创建了一个小组，主要制作一些互联网公益项目，提供免费 VPS 、 二级域名等，目前制作了二级域名分发平台。",
    },
  ],
  projectList: [
    {
      name: "安卓APP：音乐播放器",
      role: "独立开发者",
      time: ["2023.03", "2023.05"],
      desc: "项目描述：\n从零开始学习 Java 同时学习安卓软件开发，制作简单的 APP 页面。使用网易云接口获取账号下的歌单，并显示。",
      content:
        "学习收获：\n1. 学会做 markdown 笔记、开设个人博客\n2. 了解了安卓系统的特性\n3. 学习了 Android Studio 的基本使用\n4. 掌握了xml代码、基本的Java语法",
    },
    {
      name: "LibreTranslator",
      role: "独立开发者",
      time: ["2024.07", "-"],
      desc: "项目描述：\n制作一个调用 DeepLx 接口的翻译网页，通过 Vercel 或者 Cloudflare Pages 部署。\n实例：\nhttps://fy.is-a.dev",
      content:
        "学习收获：\n1. 了解 Cloudflare Pages 工作原理\n2. 掌握了 Git 操作\n3. 初步学习了React、JS、CSS\n4. 实现了一个经典的翻译网页，包括基本的功能，并获得了 60 个 Github 星星",
    },
    {
      name: "Java 交通灯信号模拟系统",
      role: "独立开发者",
      time: ["2024.06", "2024.07"],
      desc: "实现十字路口交通灯和通行状况模拟，系统采用Java语言实现，主要包括车辆生成、信号灯控制和车道管理三个模块。",
      content: "主要工作：\n对十字路口模拟程序进行需求分析、数据结构实现和代码实现\n主要收获：\n了解了一个完整项目的开发过程，并掌握了Java语言编程",
    },
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: "save"; payload: any } | { type: "restore" };

interface AppContextInterface {
  state: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ResumeContext = React.createContext<AppContextInterface>({
  state: initialState,
  dispatch: (action) => action,
});

export function reducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "save":
      localStorage.setItem(
        "refuseme_data",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case "restore":
      localStorage.removeItem("refuseme_data");
      return initialState;
    default:
      throw new Error();
  }
}
