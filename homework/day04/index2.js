// const express = require('express')
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/starbucks", function (req, res) {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      name: "아메리카노",
      kcal: 5,
    },
    {
      name: "카페라떼",
      kcal: 10,
    },
    {
      name: "콜드브루",
      kcal: 15,
    },
    {
      name: "카페모카",
      kcal: 50,
    },
    {
      name: "돌체라떼",
      kcal: 500,
    },
    {
      name: "카라멜라떼",
      kcal: 200,
    },
    {
      name: "바닐라라떼",
      kcal: 20,
    },
    {
      name: "에스프레소",
      kcal: 1,
    },
    {
      name: "디카페인",
      kcal: 5,
    },
    {
      name: "오트라떼",
      kcal: 300,
    },
  ];
  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기

  res.send(result);
});

app.post("/starbucks", function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req.body);

  // 2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  //

  // 3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답(response) 주기
  res.send("숙제1이 끝났습니다.").status(200);
});

app.listen(3000, () => {
  console.log("서버프로그램을 켜는데 성공했어요!");
});
