import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

export default function App({ Component }) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히
  }); // <=그래프 큐엘 셋팅

  return (
    <>
      <div>===========_app.js 컴포넌트 입니다==========</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>===========_app.js 끝 부분 컴포넌트 입니다==========</div>
    </>
  );
}
