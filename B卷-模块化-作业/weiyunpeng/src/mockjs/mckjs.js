import Mock from "mockjs"
import videos from "./Vieov.json"
Mock.mock('/mock/getVideo','get',{code:200,data:videos})
