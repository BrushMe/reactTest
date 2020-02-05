import React, {useEffect, useState} from 'react';

function App() {

    /**
     * Hook
     * - useState는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공한다.
     * - 주의: this.setState와 달리 state를 갱신하는 것은 병합하는 것이 아니라 대체함.
     */
    const [count, setCount] = useState(0);

    /**
     * Effect Hook
     * - class의 componentDidMount 나 componentDidUpdate와 비슷, 매 렌더링 이후에 effects를 실행
     * - 컴포넌트 내에서 여러개의 effect 사용 가능
     * - 사용 규칙: 반복문 조건문에서 호출X, React 함수 컴포넌트 내에서만 사용
     */
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div className="App">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click!</button>
        </div>
    );
}

export default App;
