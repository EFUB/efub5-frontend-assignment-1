# TodoList 성능 최적화 프로젝트

React로 구현한 TodoList 웹앱의 불필요한 리렌더링을 방지하기 위한 성능 최적화 과제입니다.


### 1. useCallback - 함수 재생성 방지

위치: App.jsx
목적: onCreate, onRemove, onToggle, onUpdate 함수가 매번 새로 생성되지 않도록 방지
효과: props로 전달되는 함수가 고정되어, 자식 컴포넌트의 불필요한 리렌더링을 막음


### 3. React.memo - 컴포넌트 리렌더링 방지

위치: TodoList.jsx, TodoCreate.jsx, TodoHead.jsx
목적: props가 바뀌지 않으면 해당 컴포넌트를 다시 렌더링하지 않도록 설정
효과: 불필요한 렌더링으로 인한 성능 저하 방지

### 3. useMemo - 계산 결과 캐싱

위치: TodoHead.jsx
목적: 완료되지 않은 할 일 개수를 todos가 바뀔 때만 다시 계산
효과: todos가 바뀌지 않으면 계산 작업을 건너뜀


### 최적화 결과 요약

App의 상태가 바뀌어도 관련 없는 컴포넌트는 리렌더링 되지 않음
불필요한 렌더링 제거로 앱이 더 부드럽게 작동함
구조를 유지하면서 성능 개선에 성공