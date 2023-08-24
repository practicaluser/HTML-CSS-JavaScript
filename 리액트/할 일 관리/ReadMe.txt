할 일 관리 앱의 설계 목적(가장 핵심 기능 위주로 접근)
-할 일을 입력하면 할 일을 기록하기
-완료한 할 일 삭제 기능

할 일 관리 앱의 UI 요소를 컴포넌트 단위로 나눴을 때
-App 컴포넌트
--Header
--TodoInput
--TodoList
---TodoItem

1 UI 구현하기(퍼블리싱 또는 UI 개발)

1-2 Header 컴포넌트 만들기

1-3 TodoInput 컴포넌트 만들기

1-4 TodoList 컴포넌트 만들기

1-5 TodoItem 컴포넌트 만들기

2 기능 구현 
App 컴포넌트 : 할 일 데이터 관리
Header 컴포넌트 : 오늘의 날짜 표시
TodoInput 컴포넌트 : 새로운 할 일 아이템 생성
TodoList 컴포넌트 : 검색에 따라 필터링된 할 일 아이템 렌더링
TodoItem 컴포넌트 : 할 일 아이템의 수정 및 삭제

2-1 기초 데이터 설정하기
const [todo, setTodo] = useState([]);

2-2 데이터 모델링하기
현실의 사물이나 개념을 객체와 같은 자료구조로 표현하는 행위이다.(현실의 사물은 여러 속성을 동시에 가지고 있어서, 예 저자의 이름과 성별 등)
하나의 할 일 아이템에는 일의 완료 여부, 일의 종류 ,생성 날짜가 포함되어 있다. 

모델링한 정보를 토대로 할 일 아이템을 자바스크립트 객체로 만들기
{
 id: 0,
 isDone: false,
 content: "React 공부하기",
 createdDate : new Date().getTime(),
}

데이터를 모델링하는 이유는 여기에서 문제가 생기면 프로젝트를 처음부터 다시 시작할 수 도 있다. 모델링은 노트나 메모장 등에 적어 보면서 코드를 작성해야 한다.

2-3 목(모조) 데이터 설정하기
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    createdDate: new Date().getTime(),
  },
];

2-4 Create : 할 일 추가하기
사용자가 새로운 할 일을 입력한다.
TodoInput 컴포넌트에 있는 추가버튼을 클릭한다.
TodoInput 컴포넌트는 부모인 App에게 아이템 추가 이베트가 발생했음을 알리고 사용자가 추가한 할 일 데이터를 전달한다
App은 TodoInput에서 받은 데이터를 이용해 새 아이템이 추가된 배열을 만들고 State 변수 todo 값을 업데이ㅡ 한다.
TodoInput 컴포넌트는 할 일 입력 폼을 초기화한다.

2-4-1 아이템 추가 함수 만들기
const onCreate = (content) => {
    const newItem = {
      id: 0,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
  };
TodoInput 컴포넌트에서 추가 버튼을 클릭하면 호출한 함수 onCreate를 만든다. 이 데이터를 토대로 새 할일 아이템 객체를 만들어 newItem에 저장한다. 배열의 스프레드 연산자를 활용해 newItem을 포함한 새 배열을 만들어 State 변수 todo를 업데이트한다. 이렇게 작성하면 새롭게 추가된 아이템은 항상 배열의 0번 요소가 된다.
모든 아이템은 고유한 id를 가져야 하는데, 새롭게 추가할 아이템의 id가 모두 0으로 고정되어서 아이템을 추가할 때마다 중복 id가 만들어져 문제가 발생한다. Ref 객체를 활용하면 문제를 해결할 수 있다.
함수 onCreate는 사용자가 TodoInput 컴포넌트에서 추가 버튼을 클릭해야 호출되기 때문에 이 컴포넌트에 Props로 전달해야 한다.

TodoInput 컴포넌트에서 
const [content, setContent] = useState(''); 사용자가 입력 폼에 입력할 데이터를 저장할 content를 만듦

<input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
/>
입력란의 현재 값을 나타난다. onChange는 입력란의 현재 값의 내용이 변경될 때 호출되는 이벤트 핸들러다

2-4-2 Create 완성도 높이기

-빈 입력 방지하기
--할 일 입력 폼을 관리할 Ref 객체를 하나 만들고, 함수 onSubmit에서 content 값이 비어 있으면 입력 폼에 포커스를 구현하는 방식

-아이템 추가 후 입력 폼 초기화하기
--의도치 않게 추가 버튼을 잘 못 눌러 중복 아이템을 생성할 수 있다

-엔터 키를 눌러 아이템 추가하기


2-5 Read: 할 일 리스트 렌더링하기

2-5-1 배열을 리스트로 렌더링하기
-리액트에서 배열 데이터를 렌더링할 때는 배열 메서드 map을 주로 이용한다.
-{todo.map((it) => (
          <div>{it.content}</div>
        ))}

-map을 이용해 html이 아닌 컴포넌트를 반환하도록 수정하기

-key 설정하기
--key는 리스트에서 각각의 컴포넌트를 구분하기 위해 사용하는 값이다.
--리스트에서 특정 컴포넌트를 수정, 추가, 삭제하는 경우, 이 key로 어떤 컴포넌트를 업데이트할지 결정한다.
--아이템마다 고유한 ID를 갖도록 데이터를 모델링했으므로 id를 key로 전달하면 된다.

-배열을 리스트로 렌더링하려면 리스트 내의 고유한 key를 Props로 전달해야 한다.

2-5-2 검색어에 따라 필터링하기

-검색 기능 만들기
--사용자가 입력하는 검색어를 처리할 State 변수를 만든 다음, 검색 폼에서 사용자가 입력한 내용을 처리하는 기능을 만든다.

-대소 문자를 구별하지 않게 하기

2-5-3 Update 할일 수정하기

-기능 흐름 살펴보기
사용자 : 체크박스 체크
           TodoItem      →    onUpdate                →  App 컴포넌트
           리스트 리렌더링    ← 변경된  Props 전달(App 컴포넌트) ← App 컴포넌트(데이터 업데이트(수정) 완료)

1 사용자가 TodoItem의 체크박스에 체크 표시한다.
2 TodoItem 컴포넌트는 함수 onUpdate를 호출하고 어떤 체크박스에 틱이 발생했는데 해당 아이템의 id를 인수로 전달한다. 그 전에 함수  onUpdate를 App 컴포넌트에서 Props로 TodoItem에 전달해야 한다.
3 App 컴포넌트의 함수 onUpdate는 체크가 발생한 아이템의 상태(완료 또는 미완료)를 토글하기 위해 State 값을 업데이트한다.
4 App 컴포넌트의 State 값이 변경되면 TodoList에 전달하는 Props의 값 또한 변경된다. 
5 TodoList는 변경된 State 값을 다시 리스트로 렌더링한다. 결과적으로 수정사항이 반영된다.

-아이템 수정 함수 만들기(onUpdate)
--리액트 컴포넌트는 한 단계 아래의 자식 컴포넌트에만 데이터를 전달할 수 있어서, 한 단계보다 더 떨어져 있는 자식 컴포넌트에 데이터를 전달하려면 전달에 전달을 반복할 수 밖에 없다.

-TodoItem 컴포넌트에서 아이템 수정 함수 호출하기

2-6 Delete: 할 일 삭제하기

사용자 : 삭제 버튼 클릭
           TodoItem      →    onDelete               →  App 컴포넌트
           리스트 리렌더링    ← 변경된  Props 전달(App 컴포넌트) ← App 컴포넌트(데이터 업데이트(삭제) 완료)

기능 흐름 살펴보기
1 사용자가 삭제 버튼 클릭
2 TodoItem 컴포넌트는 함수 onDelete를 호출한다.  이 함수는 App의 State 값을 업데이트하므로 App 컴포넌트에서 Props로 전달해야 한다.
3 삭제 버튼을 클릭하면 삭제할 할 일 아이템만 빼고, 새 배열을 만들어 State 값을 업데이트한다.
4  State 변수 todo가 변경되면 App가 TodoList에 전달하는 Props의 값 또한 변경된다. 
5 TodoList는 Props의 값이 변경되면 리렌더된다. 이 때 새로운 배열 todo로 할 일 리스트를 다시 렌더링한다.

2-6-1 아이템 삭제 함수 만들기(filter 메서드 활용)

3 useReducer 이해하기

-TestComp 컴포넌트 생성

-상태 변화 코드
--예 onIncrease나 onDecrease
--하나의 컴포넌트 안에 너무 많은 상태 변화 코드가 있으면 가독성을 해쳐 유지 보수를 어렵게 만들어서 분리할 필요성이 있다.

3-1 useReducer 기본 사용법
-useReducer는 state 관리를 컴포넌트 내부가 아닌 외부에서 할 수 있게 만든다.

3-2 할 일 관리 앱 업그레이드
-실무에서는 컴포넌트를 관리하는 State가 복잡하지 않으면 useState를 사용하고, 그렇지 않으면 useReducer를 사용한다.

4 최적화
-메모이제이션 기법을 이용핸 리엑트의 연산 낭비 줄이기

4-1 함수의 불필요한 재호출 방지하기(useMemo)

-할 일 분석 기능 추가하기

-문제점 파악하기
--할 일 아이템을 분석하는 함수 analyzeTodo는 todo에 저장한 아이템 개수에 비례해 수행할 연산량이 증가한다. 만약 todo에 저장한 아이템 개수가 많아지면 성능상의 문제를 일으킬 가능성이 있다.
--analyzeTodo에 console.log('함수호출');를 넣으면 react를 검색할 때 함수 호출을 6번이나 한다. state 변수 search가 업데이트되어 TodoList 컴포넌트가 리렌더되면 내부에 선언한 함수 analyzeTodo 또한 다시 호출된다.

-useMemo를 이용해 할 일 관리 앱 최적화하기
--useMemo를 사용하면 특정 함수를 호출했을 때 그 함수의 반환 값을 기억한다. 그리고 같은 함수를 다시 호출하면 기억해 두었던 값을 반환한다. 그래서 함수의 반환 값을 다시 구하는 불필요한 연산을 수행하지 않아 성능을 최적화할 수 있다.
--useMemo는 함수가 아닌 값을 반환하므로 analyzeTodo에는 값이 저장된다. 따라서 구조 분해 할당의 대상의 기존의 analyzeTodo()가 아닌 analyzeTodo로 변경해야 한다.

4-2 불필요한 컴포넌트 리렌더 방지하기

-고차 컴포넌트(Higher Order Component)와 횡단 관심사(Cross-Cutting Concerns)
--고차 컴포넌트는 컴포넌트의 기능을 다시 사용하기 위한 기술
---컴포넌트(기능 A) + withFunc(기능 B) = 강화된 컴포넌트(기능 A+ 기능 B)

-React.memo를 이용해 할 일 관리 앱 최적화하기
--App 컴포넌트를 리렌더하면 함수 onUpdate와 onDelete가 다시 만들어지는데, 이때 함수는 새롭게 선언한 것과 마찬가지로 참좃값이 변경된다. 따라서 이 함수를 Props로 받는 컴포넌트는 React.memo를 적용했다고 하더라도 다시 렌더링된다. 그래서 컴포넌트를 리렌더해도 함수를 다시 생성하지 않도록 만들어 주는 리액트 훅 useCallback을 사용한다.

- 불필요한 함수 재생성 방지하기(useCallback)

-최적화 유의점
--최적화는 마지막에 하기(최적화 이후에는 만든 기능을 수정하거나 확장하기 어렵다)
--하나의 컴포넌트에 많은 State를 생성하지 말기

5 컴포넌트 트리에 데이터 공급하기

5-1 Context
-Props driliing 문제를 해결하기 위해서 사용
-서비스를 리액트 앱으로 설계하는 경우, 적게는 10개, 많게는 200개 이상의 컴포넌트를 관리해야 한다.
-TodoInput, TodoList, TodoItem는 모두 할 일을 관리한다는 같은 문맥(Context) 아래 있다. Context을 이용해서 일일이 props를 전달하지 않고 컴포넌트 트리 전역에 데이터를 공급할 수 있다.
-createContext를 이용해 Context를 만들고, 값을 공급할 컴포넌트를 Context.Provider로 감싼다. 그리고 함수 useContext를 호출해 Context가 공급하는 값을 불러와 사용한다.

5-2 할 일 관리 앱 리팩토링하기

-TodoContext 만들기
-데이터 공급하기(App 컴포넌트에 Provider를 배치)
-TodoList 컴포넌트에서 Context 데이터 사용하기
-TodoItem 컴포넌트에서 Context 데이터 사용하기
-TodoList 컴포넌트에서 onCreate를 TodoContext에서 받도록 수정하기

-리팩터링 완료 후 콘솔을 확인하면 React.memo가 리팩토링 이후 정상적으로 동작하지 않는다

-문제의 원인 파악하기
--할 일 아이템을 추가하면 App 컴포넌트의 todo가 업데이트 된다. 이와 동시에 TodoContext.Provider에 전달되는 props도 업데이트된다. 그래서 TodoContext.Provider에 전달하는 모든 props 또한 바뀐다.
--즉 State변수 todo와 onCreate , onUpdate, onDelete 와 같은 dispatch 관련 함수들이 하나의 개겣로 묶여 동일한 context에 props로 전달되기 때문이다. 그래서 역할에 따라 Context를 분리한다.

구조 재설계하기
-TodoStateContext(todo가 업데이트 되면 영향받는 컴포넌트를 위한 Context)와 TodoDispatchContext(onCreate , onUpdate, onDelete가 변경되면 영향받는 컴포넌트를 위한 Context)로 분리
-App 컴포넌트에서 memoizedDispatches위치를 return 바로 앞으로 옮겼더니 정상실행되었음