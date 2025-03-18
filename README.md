```
│── /src
│    ├── /array      # 数组相关工具函数
│    │    ├── chunk.ts
│    │    ├── unique.ts
│    │    ├── index.ts  # 汇总导出
│    ├── /string     # 字符串相关工具函数
│    │    ├── capitalize.ts
│    │    ├── camelCase.ts
│    │    ├── index.ts  # 汇总导出
│    ├── /object     # 对象处理工具函数
│    │    ├── deepClone.ts
│    │    ├── merge.ts
│    │    ├── index.ts
│    ├── /function   # 函数式编程相关工具
│    │    ├── debounce.ts
│    │    ├── throttle.ts
│    │    ├── curry.ts
│    │    ├── index.ts
│    ├── /number     # 数字相关工具
│    │    ├── clamp.ts
│    │    ├── random.ts
│    │    ├── index.ts
│    ├── /date       # 日期处理
│    │    ├── formatDate.ts
│    │    ├── index.ts
│    ├── /utils      # 通用工具
│    │    ├── isEqual.ts
│    │    ├── typeCheck.ts
│    │    ├── index.ts
│    ├── index.ts    # 统一导出所有模块
│── /tests           # 单元测试目录
│    ├── array.test.ts
│    ├── string.test.ts
│    ├── function.test.ts
│    ├── number.test.ts
│── /docs            # 文档
│    ├── README.md
│    ├── API.md
│── /dist            # 构建后的代码
│── .eslintrc.js     # ESLint 配置
│── .prettierrc      # Prettier 配置
│── package.json
│── tsconfig.json
│── vite.config.ts
```