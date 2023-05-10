# Moss AI

Moss AI 允许你使用自己的 openai API KEY 来快速的调用 openai 接口，目前集成了 gpt35 和 embedding. 可构建自己的知识库。

## 🛸 在线体验

🎉 [doc.mossai.me](https://doc.mossai.me/)

![Demo](docs/imgs/demo.png?raw=true 'demo')

#### 知识库原理图

![KBProcess](docs/imgs/KBProcess.jpg?raw=true 'KBProcess')

## 👨‍💻 开发

项目技术栈: NextJs + TS + ChakraUI + Mongo + Postgres（Vector 插件）  
这是一个平台项目，非单机项目，除了模型调用外还涉及非常多用户的内容。  
[本地开发 Quick Start](docs/dev/README.md)

## 🚀 私有化部署

[docker-compose 部署教程](docs/deploy/docker.md)
