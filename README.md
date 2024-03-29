- [JSX là gì?](#jsx-là-gì)
  - [Nhúng biến vào JSX](#nhúng-biến-vào-jsx)
  - [Truyền thuộc tính với JSX](#truyền-thuộc-tính-với-jsx)
  - [Chỉ định Children với JSX](#chỉ-định-children-với-jsx)
  - [JSX giúp bạn chống tấn công Injection](#jsx-giúp-bạn-chống-tấn-công-injection)
  - [JSX là đại diện của object](#jsx-là-đại-diện-của-object)
- [Render Element là gì?](#render-element-là-gì)
  - [Render element vào trong DOM thật](#render-element-vào-trong-dom-thật)
  - [Cập nhật element đã render](#cập-nhật-element-đã-render)
  - [React chỉ cập nhật những gì cần thiết](#react-chỉ-cập-nhật-những-gì-cần-thiết)
- [Component và Props là gì? ( cơ bản ) <br>](#component-và-props-là-gì--cơ-bản--br)
- [Children Props là gì?](#children-props-là-gì)
- [State là gì?](#state-là-gì)
- [useState là gì?](#usestate-là-gì)
- [React re-render 2 lần mặc dù setState cùng value](#react-re-render-2-lần-mặc-dù-setstate-cùng-value)
- [useEffect](#useeffect)
  - [Không truyền depedency](#không-truyền-depedency)
  - [Depedency là array rỗng `[]`](#depedency-là-array-rỗng)
  - [Depedency có các item `[a,b]`](#depedency-có-các-item-ab)
  - [Trong trường hợp setState trong useEffect mà cần dùng state trước đó, nhưng không muốn khai báo thêm item trong depedency thì hãy dùng `prevState = () => {}`](#trong-trường-hợp-setstate-trong-useeffect-mà-cần-dùng-state-trước-đó-nhưng-không-muốn-khai-báo-thêm-item-trong-depedency-thì-hãy-dùng-prevstate)
  - [useEffect còn có một clean up function dùng để chạy trước khi effect function chạy lại lần tiếp theo](#useeffect-còn-có-một-clean-up-function-dùng-để-chạy-trước-khi-effect-function-chạy-lại-lần-tiếp-theo)
- [Cleanup function là gì](#cleanup-function-là-gì)
- [useRef và useState giống và khác nhau thế nào ?](#useref-và-usestate-giống-và-khác-nhau-thế-nào)
- [Những nguyên tắc khi sử dụng hooks](#những-nguyên-tắc-khi-sử-dụng-hooks)
- [Form trong React](#form-trong-react)
  - [Controlled components](#controlled-components)
  - [Textarea](#textarea)
  - [Select tag](#select-tag)
  - [File input tag](#file-input-tag)
  - [Xử lý nhiều inputs](#xử-lý-nhiều-inputs)
- [Uncontrolled Components](#uncontrolled-components)
  - [Default value](#default-value)
  - [File input tag](#file-input-tag)
  - [Fix những lỗi phổ biến liên quan đến từ khoá uncontrolled](#fix-những-lỗi-phổ-biến-liên-quan-đến-từ-khoá-uncontrolled)
- [React Hook Form cheatsheet](#react-hook-form-cheatsheet)
- [Lifting State Up](#lifting-state-up)
- [Phân tích](#phân-tích)
- [Bài học học được](#bài-học-học-được)

* [useContext](#usecontext)
* [createPortal](#createportal)
* [Props Drilling là gì](#props-drilling-là-gì)
* [Ý nghĩa của các component trong React-Router-Dom v6](#ý-nghĩa-của-các-component-trong-react-router-dom-v6)
* [Higher Order Components](#higher-order-components)
* [Vấn đề khi sử dụng HOCS](#vấn-đề-khi-sử-dụng-hocs)
* [Lifting State](#lifting-state)
* [Props Render - một phương pháp để xử lí Lifting State & Props Drilling](#props-render---một-phương-pháp-để-xử-lí-lifting-state--props-drilling)
* [Tổng quan sơ lược lại về HOCS, Render Props và Custom hooks](#tổng-quan-sơ-lược-lại-về-hocs-render-props-và-custom-hooks)
* [React Composition (Compound Component)](#react-composition--compound-component-)
* [Props Collection - học từ Kentc Dodds (aka creator of Remix)](#props-collection---học-từ-kentc-dodds-aka-creator-of-remix)
* [Props Getter](#props-getter)
* [Control Props - 1 kiến thức cực advanced, suy nghĩ kĩ trước khi đọc (bởi tôi cũng chưa hiểu rõ nữa :( )](#control-props---1-kiến-thức-cực-advanced-suy-nghĩ-kĩ-trước-khi-đọc-bởi-tôi-cũng-chưa-hiểu-rõ-nữa)
  - [Vậy ta phải làm thế nào ?](#vậy-ta-phải-làm-thế-nào)
  - [Bây giờ, ta sẽ cùng tìm hiểu cách làm thế nào để các devs khác có thể chèn logic code của họ vào code cùa mình mà không cần mở file CounterControlProps.js ra nhé](#bây-giờ-ta-sẽ-cùng-tìm-hiểu-cách-làm-thế-nào-để-các-devs-khác-có-thể-chèn-logic-code-của-họ-vào-code-cùa-mình-mà-không-cần-mở-file-countercontrolpropsjs-ra-nhé)
* [Inversion Of Control](#inversion-of-control)
* [useMemo, useCallback và React.memo](#usememo-usecallback-và-reactmemo)
* [React Error Boundary](#react-error-boundary)
* [Firebase](#firebase)
* [Truy vấn dữ liệu nâng cao với Firestore Queries](#truy-v-n-d--li-u-n-ng-cao-v-i-firestore-queries)
* [Firebase Authentication](#firebase-authentication)
* [Class Component](#class-component)
  - [setState](#setstate)
  - [Lifecycle](#lifecycle)
* [Constructor trong class component](#constructor-trong-class-component)
* [ComponentdidMount](#componentdidmount)
* [componentDidUpdate](#componentdidupdate)
* [componentWillUnmount](#componentwillunmount)
  - [Inheritance](#inheritance)
  - [Composition](#composition)

## JSX là gì?

JSX là `một cú pháp mở rộng cho JavaScript`, cách viết nó cũng rất giống với HTML nên khá dễ để hiểu.

JSX = Javascript + XML. Nó biến cú pháp dạng gần như **XML về thành Javascript**. **Giúp người lập trình** có thể **code ReactJS bằng cú pháp của XML** thay vì sử dụng Javascript. **Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.**

### Nhúng biến vào JSX

Bạn có thể nhúng bất cứ thứ gì từ biến đến function

```jsx
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

```jsx
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

### Truyền thuộc tính với JSX

- Truyền giá trị cố định:

```jsx
const element = <a href="https://www.reactjs.org"> link </a>;
```

- Hoặc một biến:

```jsx
const element = <img src={user.avatarUrl}></img>;
```

> **Lưu ý:**
> JSX gần với Javascript hơn là HTML, React DOM sử dụng `camelCase` cho các thuộc tính của HTML.
> Ví dụ, `class` sẽ trở thành `className` trong JSX, và `tabindex` sẽ trở thành `tabIndex`
> Tương tự với các thẻ và thuộc tính bên trong svg (stroke-line, line-cap, ...v.v)

### Chỉ định Children với JSX

- Nếu tag trống hoặc không có thẻ đóng thì bạn có thể kết thúc ngay với `/>`.

```jsx
const element = <img src={user.avatarUrl} />;
```

- JSX tag cũng có thể chứa children

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX giúp bạn chống tấn công Injection

```jsx
const title = `<script>sendToken(localstorage.getItem("access_token"))</script>`;
// This is safe:
const element = <h1>{title}</h1>;
```

Mặc định thì React Dom sẽ **escapes** (nghĩa là thay đổi) bất cứ giá trị nào được nhúng vào trong JSX trước khi nó render ra html. Điều này đảm bảo ngăn chặn việc tấn công XSS.

Ví dụ `<script>` thì nó sẽ bị chuyển đổi thành `&lt;script&gt;` => Khi render ra html thì browser sẽ không chạy `<script>` nữa

### JSX là đại diện của object

Babel biên dịch JSX thành `React.createElement()`

2 ví dụ dưới đây thì tương đương

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

```jsx
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

`React.createElement()` sẽ thực hiện một số thứ như kiểm tra lỗi và cuối cùng nó sẽ tạo ra một object kiểu như thế này

```jsx
// Note: this structure is simplified
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

Những object này được gọi là React Element. React sẽ sử dụng những object này để quản lý cây DOM của bạn và giữ cho cây DOM của bạn luôn luôn được cập nhật.

## Render Element là gì?

Element là khối nhỏ nhất trong ứng dụng React, một element mô tả những gì mà bạn thấy trên màn hình

```jsx
const element = <h1>Hello, world</h1>;
```

Không như DOM Element của trình duyệt (DOM thật), React element là object đơn giản và dễ dàng tạo. React DOM sẽ đảm nhận việc update DOM thật để khớp với React element

### Render element vào trong DOM thật

Giả sử chúng ta có một thẻ `div` trong file HTML.

```html
<div id="root"></div>
```

Chúng ta gọi đây là DOM node gốc bởi vì mọi thứ bên trong nó sẽ được quản lý bởi React DOM.

Những ứng dụng được xây dựng bằng React thường sẽ có một DOM node gốc.

Để render một React element thì chúng ta cần

1. Truyền DOM element (DOM thật) vào `ReactDOM.createRoot()`
2. Truyền React element vào `root.render()`

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello, world</h1>;
root.render(element);
```

### Cập nhật element đã render

React element thì bất biến. Một khi bạn đã tạo nó thì bạn không thể thay đổi children hay thuộc tính của nó.

Với những kiến thức chúng ta đã đọc từ trên xuống thì tạm thời chúng ta chỉ có thể cập nhật lại UI bằng cách tạo một element mới và truyền nó vào `root.render()`

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>Current time: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

Ví dụ trên gọi `root.render()` mỗi giây từ `setInterval()` callback

> Note:
> Trong thực tế thì hầu hết các React app chỉ gọi `root.render()` một lần duy nhất khi bắt đầu truy cập vào trang, chứ không phải sử dụng `setInterval()` để cứ chu kì 1s cập nhật 1 lần, để cập nhật UI thì ta sẽ cập nhật lại bằng state hoặc props (sẽ được học ở những bài tiếp theo)

### React chỉ cập nhật những gì cần thiết

React DOM so sánh các element và thành phần children của nó với phiên bản trước. Nó chỉ cập nhật DOM khi cảm thấy cần thiết.

Có thể test bằng ví dụ phía trên.

## Component và Props là gì? ( cơ bản ) <br>

Component là những thành phần giao diện (UI) được định nghĩa độc lập, có thể tái sử dụng ở nhiều nơi và hoàn toàn tách biệt nhau.

Component có 2 loại là Function và Class:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Cách đây khoảng 3 năm thì người ta dùng class component vì lúc đó chưa có hook. Bây giờ thì hook đã phát triển mạnh mẽ nên class component dần dần không còn ai dùng nữa.

> Lưu ý: Luôn luôn bắt đầu tên component bằng chữ in hoa Nếu bắt đầu bằng chữ thường thì React sẽ coi component đó là một HTML tag.

Props là viết tắt của Properties, là một `object` chứa các thuộc tính của một `Component`.

Bạn có thể hình dung Props khá giống với các Attribute của các thẻ HTML vậy

Ví dụ về đoạn mã HTML như sau: <br>

```html
<img src="img_girl.jpg" width="500" height="600" />
```

Bạn có thể tưởng tượng rằng các attribute như `width`, `src`, `height` ở trên cũng có thể được coi là các props của thẻ img, còn đây là ví dụ về props trong React:

```jsx
// Class Component
class Welcome extends React.Component {
  render() {
    console.log(this.props) // object
    return (
      <h1>Hello, {this.props.name}</h1>
      <h2>You are {this.props.age}</h2>
      )
  }
}

function App() {
  return (
    <div>
      <Welcome name='Sara' age={22}/>
    </div>
  )
}

// Functional Component
function Welcome(props){
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>You are {props.age}</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Welcome name='Sara' age={22}/>
    </div>
  )
}
```

- Props được xem là một trong những cách giúp truyền dữ liệu từ các component cha xuống với các component con, điển hình là ở ví dụ trên, component cha chính là `App`, vì nó chứa component `Welcome` bên trong

## Children Props là gì?

Đầu tiên, children prop là 1 prop chứa nội dung con được bọc bên trong 1 component, và prop này không phải truyền vào bằng cách ghi vào bên cạnh tên component mà nó sẽ nằm giữa thẻ đóng và thẻ mở của 1 component như sau:

```js
// Bên file MyComponent.js
const MyComponent = ({children}) => {
  return (
    <h1>{children}</h1>
  )
}

// Cách sai:
<MyComponent children={<div>Hello my friend</div>}></MyComponent>
// Cách đúng:
<MyComponent>Hello my friend</MyComponent>
```

## State là gì?

State **là thông tin được lưu bên trong Component** và **Component đó có thể tùy chỉnh cái state đó**, ví dụ:

Khi bạn code **một trang đăng kí**, thì trong **trang đó sẽ có gì** ? **Trong trang đăng kí sẽ có username, password, email,** ... đây **là những thông tin thuộc component của trang đăng kí**

Để dùng state thì sẽ sử dụng một cái hook gọi là useState:

```js
// username, email, password là các state
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

## useState là gì?

- useState cho phép chúng ta khai báo local state trong Function Component cách mà trước để chỉ dùng cho Class Component

```js
const [state, setState] = useState(initialStateValue);
```

- Như trên, chúng ta có thể hiểu
  - state: định nghĩa tên của state nó có thể là đơn giá trị hoặc object,.. (là tham số của useState)
  - setState: định nghĩa tên function dùng cho việc update state (là tham số của useState)
  - initialStateValue: là giá trị ban đầu của state.
  - VD:

* Giờ ta sẽ ví dụ một bài tập về toggle checkbox của máy iphone, và yêu cầu của bài tập là khi ta click vào checkbox đó thì khối màu trắng sẽ di chuyển qua phải và thay đổi background. Vậy ta sẽ làm thế nào?
* Đầu tiên code css cho khối màu trắng và background xám của nó ở trạng thái tắt và bật (khi bật sẽ addClass active vào)
* Sau khi code xong CSS rồi ta sẽ bắt đầu sử dụng useState cùng với destructuring array
* Như sau:

```js
const [on, setOn] = useState(false);
// state là on
// function để update state là setOn
// initialStateValue : false (giá trị ban đầu của state ý ở đây là khi mở trang web lên thì công tắc sẽ ở trạng thái tắt)
```

## React re-render 2 lần mặc dù setState cùng value

Điều kiện để component của bạn re-render khi dùng setState là chúng ta phải setState với giá trị khác với state hiện tại (React sử dụng thuật toán so sánh [Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description))

- Đối với kiểu dữ liệu nguyên thuỷ thì khác giá trị
- Đối với object thì khác tham chiếu

Nhưng ta sẽ gặp một trường hợp như dưới đây. Khi nhấn button lần đầu thì re-render 1 lần, nhấn lần nữa thì re-render lần thứ 2 mặc dù 2 giá trị name không thay đổi.

```jsx
export default function RuleOfHook() {
  // 1. Use the name state variable
  const [name, setName] = useState("Mary");
  return (
    <div>
      <button onClick={() => setName("Alex")}>Change Name</button>
      RuleOfHook
    </div>
  );
}
```

Theo như Team React giải thích thì khi chúng ta set state với giá trị không đổi, ban đầu React sẽ không biết liệu bạn có thực sự muốn set state và re-render hay không nên React sẽ re-render. Ở lần set state tiếp theo, khi chúng ta lại set với trị cũ thì bây giờ React sẽ không re-render nữa, vì cả 2 state đều giống nhau.

## useEffect

`useEffect` được sử dụng trong functional component đóng vai trò như những life cycle bên class component.

`useEffect` nhận vào 2 tham số là effect function và deps array

effect function sẽ chạy sau khi compoponent render và mounted

Chúng ta sẽ có 3 trường hợp là

### Không truyền depedency

```jsx
useEffect(() => {
  //...handle something
});
```

Trường hợp này nó đóng vai trò như một `componentDidUpdate`. Effect function sẽ chạy lại mỗi khi component re-render

### Depedency là array rỗng `[]`

```jsx
useEffect(() => {
  //...handle something
}, []);
```

Trường hợp này nó đóng vai trò như một `componentDidMount`. Effect function chạy duy nhất 1 lần sau khi component render lần đầu.

### Depedency có các item `[a,b]`

```jsx
useEffect(() => {
  //...handle something
}, [a, b]);
```

Trường hợp này nó đóng vai trò như một `componentDidMount` nhưng thêm 1 cái nữa là khi giá trị `a` hoặc `b` bị thay đổi tham chiếu (vùng nhớ) thì cái effect function nó sẽ được chạy lại

### Trong trường hợp setState trong useEffect mà cần dùng state trước đó, nhưng không muốn khai báo thêm item trong depedency thì hãy dùng `prevState = () => {}`

### useEffect còn có một clean up function dùng để chạy trước khi effect function chạy lại lần tiếp theo

Áp dụng điều này, chúng ta có thể sử dụng clean up function để huỷ đăng ký, huỷ gọi api trước khi component của chúng ta bị destroy. Giống `componentWillUnmount` bên class.

```jsx
useEffect(() => {
  //...handle something

  // clean up function
  return () => {};
}, []);
```

## Cleanup function là gì

Nói dễ hiểu thì:
Khi các bạn đang ở trang chủ (homepage) chẳng hạn mà các bạn muốn chuyển sang một trang khác bất kì như trang Contact, About, ... thì khi ở trang chủ có một tính năng side-effect nào đó mà sang trang khác bạn lại không cần nó nữa thì bạn cần phải cleanup nó đi

```js
useEffect(
  function callback() {
    // side-effects
    return function cleanup() {
      //cleanup...
    };
  },
  [deps]
);
```

- Dưới đây là ảnh sơ đồ useEffect hook để giúp bạn hiểu hơn về cleanup
  ![useEffect lifecycle](https://user-images.githubusercontent.com/88824627/181787967-13243cae-fa00-4f98-80d2-6d4c542763cf.svg)

> Lưu ý: Cleanup function được chạy trước side-effects

## useRef

`useRef` là một hook lưu trữ một biến có thể mutate hoặc cho phép chúng ta truy cập DOM node

### Nhắc lại kiến thức cũ

#### Mutate là gì?

Mutate là chúng ta thay đổi giá trị bên trong object mà không làm thay đổi tham chiếu của nó.

```js
const A = { name: "khoi" };
const B = A;
A.name = "cuong"; // Chúng ta đang mutate A
console.log(A === B); // true vì tham chiếu A và B giống nhau
```

#### State hay prop thì không được mutate

Đối với React thì chúng ta dùng state để lưu trữ những giá trị có thể thay đổi theo thời gian, và chúng ta không mutate state, chúng ta **thay thế state** bằng một giá trị mới với tham chiếu mới kết hợp dùng set state để nói cho React biết

```jsx
const [todo, setTodo] = useState({ name: "Hoc Bai", time: "08:20:PM" });

const handleClick = () => {
  // todo.name = 'Tap Gym' // Chúng ta không mutate như thế này!
  setState((prev) => ({ ...prev, name: "Tap Gym" })); // Chúng ta set state với một giá trị object mới khác tham chiếu object cũ
};
```

Việc cập nhật state sẽ làm component re-render

Tất nhiên là về mặc lý thuyết chúng ta vẫn có thể mutate state trong trường hợp chúng ta không muốn component re-render, nhưng không nên làm vậy, vì chúng ta sẽ không kiểm soát được state, rất dễ sinh bug. Và useState của react không sinh ra để chúng ta làm vậy

Giờ đặt vấn đề ra thì có cách nào để mutate biến mà không làm component render hay không?

#### Tạo biến trong component

```jsx
function Todo() {
  // khi component re-render vì lý do nào đó (state, props,...) thì todo sẽ bị assign lại
  const todo = { name: "Hoc Bai", time: "08:20:PM" };

  const handleClick = () => {
    // mutate như thế này sẽ không làm component re-render
    todo.name = "Tap Gym";
  };
}
```

#### Tạo biến ngoài component

```jsx
// Biến todo có thể bị dùng ở bất kỳ đâu vì nó nằm ngoài function
// Trong khi biến này chỉ sinh ra để phục phụ cho funciton Todo
const todo = { name: "Hoc Bai", time: "08:20:PM" };
function Todo() {
  const handleClick = () => {
    // mutate như thế này sẽ không làm component re-render
    todo.name = "Tap Gym";
  };
}
```

### useRef giúp tạo biến có thể mutate mà không làm component re-render

useRef return một ref object với thuộc tính current duy nhất được set theo giá trị khởi tạo mà chúng ta cung cấp.

```jsx
import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

Một số điểm đặc biệt của ref

- Tham chiếu ref sẽ không thay đổi mỗi khi re-render (không như biến thông thường, bị reset mỗi khi re-render)
- Thay đổi nó sẽ không làm re-render (không như state - làm re-render)
- Thông tin được bao gói bên trong component (không như biến bên ngoài, bị chia sẻ nhiều chỗ khác dùng được)

### Cạm bẩy khi dùng useRef

Đừng nên ghi hay đọc `ref.current` suốt quá trình render. Đây là **nguyên tắc React**!

```jsx
function MyComponent() {
  const myRef = useRef(100);

  // 🚩 Không ghi ref suốt quá trình render
  myRef.current = 123;
  // ...
  // 🚩 Không đọc ref suốt quá trình render
  return <h1>{myOtherRef.current}</h1>;
}
```

Bạn có thể đọc và ghi trong event handler hay `useEffect`

```jsx
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```

Nếu bạn phải đọc và ghi thứ gì đó suốt quá trình render, sử dụng `useState`

Khi bạn phớ vỡ những rule này, component của bạn có thể vẫn hoạt động nhưng dễ gây ra bug. Tất cả tính năng mà React thêm vào đều dựa trên nguyên tắc là pure component

## Truy cập DOM nodes hoặc React elements

Nếu bạn làm việc với React được một khoảng thời gian rồi thì bạn có thể đã từng sử dụng `ref` cho việc này. Dưới đây là ví dụ về việc sử dụng `ref`:

```jsx
import React, { useRef } from "react";
const CustomTextInput = () => {
  const textInput = useRef();
  focusTextInput = () => textInput.current.focus();
  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
};
```

Lưu ý là trong functional component thì chúng ta sử dụng `useRef` thay vì sử dụng `createRef`. Nếu chúng ta tạo một `ref` bằng cách sử dụng `createRef` trong một functional component, React sẽ tạo mới một instance `ref` mỗi lần re-render thay vì giữ nguyên instance xuyên suốt các quá trình render.

## forwardReef là gì

Như chúng ta đã tìm hiểu bên trên thì ref giúp chúng ta truy cập đến một element, vậy nó có thể truy cập đến một component React hay không? test thử nhé

```jsx
import React from "react";
const Input = () => {
  return <input type="text" style={style} />;
};
export default Input;
```

```jsx
import React, { useRef, useEffect } from "react";
import Input from "./Input";
function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    console.log({ inputRef });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
    </div>
  );
}
export default App;
```

Chúng ta sẽ nhận một thông báo tham chiếu đến **Input Component** là null
Để fix vấn đề này ta dùng `forwardRef` như một HOC cho **Input Component**

```jsx
import React, { forwardRef } from "react";
const Input = (props, ref) => <input ref={ref} type="text" style={style} />;
export default forwardRef(Input);
```

## useRef và useState giống và khác nhau thế nào ?

- Cả hai đều chứa dữ liệu của chúng trong khi render và update UI, nhưng chỉ có useState là gây ra tình trạng re-render
- useRef trả về 1 object có một property bên trong object là current nắm giữ giá trị của useRef
  VD:

```js
const number = useRef(2);
console.log(number.current);
// Ouput: 2
```

- Còn useState thì ngược lại, useState sẽ trả ra một array với 2 giá trị, giá trị thứ nhất nắm giữ giá trị của state, còn cái thứ hai là một thứ có thể nói là một thứ dùng để cập nhật, chỉnh sửa lại giá trị của state

- Cái property current của useRef là một giá trị có thể thay đổi được (mutable) nhưng biến state của useState thì không. Ngược lại với property current của useref, bạn không nên trực tiếp gán giá trị cho biến state của useState, Thay vào đó, luôn luôn sử dụng cái updater function (function dùng để cập nhật, chỉnh sửa state) như cách mà React Team viết trong docs
  <br>VD:

```js
// useRef
const count = useRef(0);
count.current = 10;
console.log(count.current); // Ouput: 10
// useState
const [count, setCount] = useState(0);
setCount(10);
console.log(count); // Ouput: 10
```

- useState và useRef, cả 2 đều đồng thời được coi là data Hooks, nhưng chỉ useRef mới có thể sử dụng vào các lĩnh vực khác nằm trong application, để truy cập trực tiếp vào component của React hay vào DOM Elements
  <br>
  -> Về cơ bản, thì useRef không gây re-render còn useState thì có và useRef thường sử dụng để truy cập vào DOM hoặc vào components. Vậy nên sử dụng useState khi bạn muốn update dữ liệu và muốn update UI, còn nếu bạn chỉ muốn lấy ra data trong quá trình mount tới khi unmount thì useRef là sự lựa chọn dành cho bạn

## Những nguyên tắc khi sử dụng hooks

- Phải sử dụng ở phía trên đoạn code return
- Không được viết ở bên trong vòng lặp
- Không được viết ở bên trong câu điều kiện
- Không được viết ở bên trong function

## Form trong React

Trước tiên các bạn cần phải hiểu là HTML form hoạt động khác một chút với DOM element React, bởi vì các element form html nó giữ state của chính nó. Ví dụ

```jsx
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

Khi bạn chạy đoạn code trên thì bạn nhập giá trị vào ô input, trình duyệt sẽ lưu giữ giá trị này. Nhưng sẽ thật tuyệt hơn nếu Javascript cũng lưu trữ và quản lý value này, và đây là cách React quản lý form. Kỹ thuật này gọi là "controlled components"

### Controlled components

Trong HTML, form element như `<input>`, `<textarea>`, `<select>` nó sẽ tự quản lý state của nó và cập nhật dựa vào người dụng nhập. Trong React, state component sẽ quản lý state của các element trên và cập nhật chúng bằng `setState`.

Một input form element mà giá trị của nó đựa điều khiển bởi React theo cách này thì được gọi là "controlled component"

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Mỗi khi người dùng nhập vào input, `handleChange` sẽ chạy và cập nhật lại `this.state.value` => thuộc tính `value` của input sẽ luôn luôn đồng bộ với `this.state.value`

### Textarea

Trong HTML, `textarea` quy định text của nó trong children

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

Trong React, `<textarea>` sử dụng thuộc tính `value`

```jsx
<textarea value={this.state.value} onChange={this.handleChange} />
```

### Select tag

Trong HTML, `<select>` thì kiểu như thế này

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Trong React, giá trị `selected` sẽ được truyền vào bằng thuộc tính `value` trong thẻ `<select>`

```jsx
<select value={this.state.value} onChange={this.handleChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

### File input tag

Trong HTML, `<input type="file">` cho phép người dùng chọn một hay nhiều file từ thiết bị của họ để upload lên server hoặc xử lý bằng javascript thông qua File API.

```jsx
<input type="file" />
```

Bởi vì giá trị của nó là read-only, vậy nên nó là uncontrolled component trong React.

### Xử lý nhiều inputs

Chúng ta có thể dựa vào thuộc tính `name` của mỗi element để xác định cập nhật state nào.

```jsx
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
```

Chúng ta dùng cú pháp ES6 computed property name để dễ dàng cập nhật state đúng key

```jsx
this.setState({
  [name]: value,
});
```

## Uncontrolled Components

Trong hầu hết các trường hợp thì React khuyên chúng ta dùng "controlled components" để implement form. Trong controlled component thì form data được xử lý bởi React component. Còn uncontrolled component thì form data sẽ được xử lý bởi DOM của chính nó.

Để viết một uncontrolled component, thay vì viết một event handler cho mỗi state update, bạn có thể sử dụng một ref để lấy value của DOM

Ví dụ dưới đây

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Chúng ta sử dụng ref để truy cập đến React element, và từ đó chúng ta lấy value của element đó. Có thể xem cách này gần giống với việc chúng ta sử dụng `document.getElementById` bên Javascript.

Khi sử dụng uncontrolled component, chúng ta vừa sử dụng React và cả non-React.

### Default value

Nếu bên HTML thì muốn set giá trị mặc định cho `<input type="text">` thì chúng ta dùng thuộc tính `value`. Riêng bên React thì chúng ta sẽ dùng thuộc tính `defaultValue`, việc thay đổi giá trị `defaultValue` sẽ không làm thay đổi giá trị trên DOM.

Quay trở lại với uncontrolled component thì `defaultValue` sẽ giúp uncontrolled component có được giá trị khởi tạo cho input, bởi vì nếu dùng thuộc tính `value` thì nó sẽ overidde giá trị trên DOM.

```jsx
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

Tương tự, `<input type="checkbox">` và `<input type="radio">` hỗ trợ `defaultChecked`, và `<select>` và `<textarea>` hỗ trợ `defaultValue`

### File input tag

Trong React, một `<input type="file" />` thì luôn luôn là một uncontrolled component bởi vì giá trị của nó chỉ có thể được set bởi người dùng, không thể lập trình.

Bạn có thể sử dụng File API để tương tác với file. Theo ví dụ bên dưới sẽ cho bạn thấy sử dụng ref đến DOM node để truy cập đến file

```jsx
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      // Initially, no file is selected
      selectedFile: null,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={this.fileInput}
            onChange={this.onFileChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FileInput />);
```

### Fix những lỗi phổ biến liên quan đến từ khoá uncontrolled

Hầu hết những lỗi này đa số là do các bạn vô tình truyền value là `null` hoặc `undefined` vào `value` của input dẫn đến React sẽ warning bạn rằng `A component is changing a controlled input to be uncontrolled.` tức là chuyển từ controlled sang uncontrolled

Hiếm gặp hơn là `A component is changing an uncontrolled input to be controlled` tức là chuyển từ uncontrolled sang controlled. Lỗi này là do ban đầu value là `undefined`, sau đó nó có lại giá trị `string` hoặc `number`. Ngược lại của cái trên

## React Hook Form cheatsheet

- reset: Reset toàn bộ form hoặc chỉ các trường nhất định
- watch : Theo dõi xem checkbox checked thì thực hiện chức năng gì và ngược lại
- isSubmitting : Khi form đang trả dữ liệu về backend
- isDirty: Khi giá trị default value được thay đổi và quay trở lại thì component sẽ re-render
- dirtyField: Trả về giá trị boolean khi các field bị thay đổi so với default values (true khi thay đổi, false khi giống default values)
- Nếu không set default value thì default value sẽ là ""
- Muốn sử dụng được isValid ta cần thêm mode vào hook useForm

## Lifting State Up

Thường những component nào mà có sự tương tác lẫn nhau khi thay đổi dữ liệu thì chúng ta nên đưa state lên component cha gần nhất giữa chúng, state lúc này sẽ được chia sẽ với những component con. Kỹ thuật này gọi là "Lifting State Up" hay đưa state lên trên

Cùng phân tích ví dụ dưới đây

![](./react-devtools-state.gif)

Chúng ta có 2 ô input để nhập giá trị độ C và độ F. Khi nhập độ C thì sẽ tự tính toán độ F và ngược lại. Nếu nhiệt độ lớn hơn 100 độ C thì nước sẽ sôi.

## Phân tích

1. Nhìn vào UI chúng ta nhận thấy có 3 component

   - Component nhập độ C: `CTemperatureInput`
   - Component nhập độ F: `FTemperatureInput`
   - Component hiển thị nước sôi hay chưa: `BoilingVerdict`

2. Chúng ta nhận thấy component nhập độ C và F giống nhau nên có thể gộp thành 1 component là `TemperatureInput`, chúng chỉ khác về giá trị `Celsius` và `Fahrenheit` cũng như title => Những cái này chúng ta có thể dùng props để truyền vào

3. Cuối cùng chúng ta còn 2 component: `TemperatureInput` và `BoilingVerdict`

4. Nhận thấy các giá trị có thể tương tác lẫn nhau, giá trị này có thể dựa vào giá trị kia để hiển thị. Vậy nên chúng ta chỉ cần tạo state để lưu giữ giá trị và những giá trị còn lại chúng ta sẽ tính toán dựa vào state này. Chúng ta sẽ lưu state vào component cha gần nhất của 2 component trên.

5. Chúng ta sẽ tạo 2 state là

   - `temperature`: Đại diện cho nhiệt độ C và F (tuỳ vào giá trị state `scale`). Có giá trị là giá trị mà chúng ta nhập vào.
   - `scale`: Đại diện cho đang edit ở độ C hay F. Có giá trị là "c" hoặc "f"

   Khi nhập liệu vào ô input độ C thì chúng ta sẽ setState `scale = 'c'` và `temperature` chính là giá trị chúng ta nhập.

   Tương tự khi nhập liệu vào ô input độ F thì chúng ta sẽ setState `scale = 'f'` và `temperature` chính là giá trị chúng ta nhập ở độ F.

## Bài học học được

Nếu chúng ta có một component A cùng với state đã được thêm vào nó. Sau đó chúng ta lại có một component B khác cũng cần giá trị state này thì chúng ta có thể di dời state của component A lên component cha của A và B.

Việc làm trên sẽ đem lại một flow mượt mà, thay vì mỗi component bạn quản lý một state và cố gắng đồng bộ các state này lại với nhau.

Đưa state lên trên có thể làm bạn viết nhiều code hơn nhưng nó đem lại nhiều lợi ích to lớn, đó là giúp bạn tốn ít thời gian để tìm và phân tích bug.

Nếu một giá trị nào đó có thể dùng prop hoặc state để lưu trữ thì đa số các trường hợp chúng ta nên chọn prop! Ví dụ, thay vì tạo 2 state là `celsiusValue` và `fahrenheitValue` trong component `TemperatureInput`, chúng ta chỉ cần tạo state `temperature` và `scale` trong component cha, các giá trị `celsiusValue` và `fahrenheitValue` có thể được tính toán và truyền xuống dưới dạng prop.

## useContext

Chúng ta dùng useContext để hạn chế việc truyền prop qua nhiều component

Chúng ta đặt những component nào muốn dùng context vào trong provider

### Cách dùng

1. Tạo context bằng `createContext`

```jsx
const ThemeContext = createContext(null);
```

2. Dùng một Provider bao bọc component muốn dùng, chỉ cần component nằm trong Provider là dùng được hết!

```jsx
const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}
```

Provider nhận vào một prop là `value`, vì thế Form component có thể nhận value này thông qua context

3. Nhận context bằng `useContext()`

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
```

## Lưu ý khi dùng useContext

- Provider gần nhất sẽ override Provider xa hơn. Ví dụ dưới đây, footer sẽ nhận `value` từ context là "light"

```jsx
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

- Nhớ truyền `value` vào Provider, không truyền `value` vào thì nó sẽ lấy giá trị mặc định mà chúng ta khởi tạo từ đầu

- Không nên **truyền thẳng một object** vào `value` ở Provider, vì mỗi lần re-render sẽ là một object mới, dẫn đến component trong Provider của chúng ta bị re-render do value context thay đổi

```jsx
function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  function login(response) {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }

  return (
    // Không truyền như này 🚫
    <AuthContext.Provider value={{ currentUser, login }}>
      <Page />
    </AuthContext.Provider>
  );
}
```

Nên truyền như thế này

```jsx
import { useCallback, useMemo } from "react";

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  // Chuẩn đấy người anh em ✔
  const contextValue = useMemo(
    () => ({
      currentUser,
      login,
    }),
    [currentUser, login]
  );

  return (
    // Chuẩn đấy người anh em ✔
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}
```

### Thêm một số ví dụ về useContext

```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

> Theo mình thì khi nào các bạn truyền qua 2 lần prop thì nên suy nghĩ đến việc dùng useContext

> Chức năng context hay còn gọi là context API không chỉ có riêng ở functional component, nó còn có ở class component nữa. Nhưng useContext thì chỉ dùng được ở functional component thôi!

## createPortal

- Lôi một component hoặc 1 đoạn code đang nằm trong một element nào đó ra ngoài cùng và nằm cùng cấp với div root
- Công dụng:
- Dùng để ẩn/hiện modal bởi modal lúc nào cũng cần phải nằm bên ngoài cùng bởi tính chất phải sử dụng nhiều z-index
- Dùng để ẩn/hiện dropdown nếu như lỡ chẳng may thằng cha của nó có overflow-hidden
- Dùng để ẩn/hiện tooltip

- Ví dụ về cách viết:

```jsx

```

## Props Drilling là gì

- Prop drilling là điều xảy ra khi bạn cần truyền dữ liệu từ một component cha xuống một component thấp hơn trong cây component, drilling - khoan vào các component khác mà các component đấy có thể không cần giá trị props, trong khi chỉ một vài component là cần thôi

## Ý nghĩa của các component trong React-Router-Dom v6

### BrowsersRouter

99% anh em sẽ dùng `<BrowsersRouter>`, được build trên history API của trình duyệt, dùng để lưu trữ URL và chuyển trang.

Ví dụ:

Đối với SPA thì server sẽ cấu hình là khi bạn nhập url nào thì server cũng trả về url nhắm đến file `index.html`, ví dụ `/`.

Khi enter url `https://cungtapyoga.com/about` vào trình duyệt, server nhận được url là `https://cungtapyoga.com/about` và sẽ trả về nội dụng là file `index.html`. Lúc này React Router sẽ đảm nhiệm việc hiển thị component cho đúng tùy vào url.

### HashRouter

HashRouter dùng dấu `#` trong URL ví dụ: `https://cungtapyoga.com/#/about`, `https://cungtapyoga.com/#/blog/uon-deo`.

Lợi ích của việc thêm dấu `#` vào url là để server không nhận biết được chúng ta vào url nào. Khi anh em nhập các url ở ví dụ trên vào trình duyệt và nhấn enter thì trình duyệt chỉ gửi lên server là `https://cungtapyoga.com` và server chỉ nhận được là `https://cungtapyoga.com`.

Điều này khá hữu ích khi server anh em là một share hosting và không toàn quyền điều hành server.

Ví dụ:

Có một server được cấu hình cho nhiều dịch vụ, mỗi dịch vụ là một url khác nhau.

- Landing Page cho user: `https://hospital.com`
- Manager: `https://hospital.com/manager`
- Doctor: `https://hospital.com/doctor`
- Staff: `https://hospital.com/staff`

Mình đảm nhiệm thiết kế một Landing Page cho user là một SPA có nhiều trang trong đó, và chỉ được cấp cho url là `https://hospital.com`.

Bây giờ nếu mình thiết kế thêm url `/manager` là dành cho việc quản lý profile cá nhân của người dùng

- BrowsersRouter: người dùng enter url `https://hospital.com/manager` thì server sẽ trả về trang của manager (người quản lý), điều này không tốt!

- HashRouter: người dùng enter url `https://hospital.com/#/manager` thì server sẽ trả về trang `https://hospital.com`, lúc này React Router sẽ thực hiện hiển thị cho đúng trang `/manager`.

### MemoryRouter

MemoryRouter lưu trữ url vào một array. Không như `<BrowserHistory>` và `<HashRouter>`, nó không bị ràng buộc bởi history stack trong trình duyệt. Điều này rất hữu ích khi viết unit test cho React Router.

### Router

Đây là cấp thấp nhất của tất cả Router component, tức là các Router component như `BrowsersRouter` hay `HashRouter` đều được build nên từ `Router` này.

Bạn không cần dùng Router, thay vì đó dùng các Router cấp cao hơn như `BrowsersRouter`

### StaticRouter

StaticRouter dùng để render React Router trong môi trường nodejs, phục vụ cho việc Server Side Rendering

- Routes: Dùng để chứa các <Route/>

- Route: Dùng để config path cho các <Link/> và lựa chọn nội dung cho mỗi link, nếu không dùng thẻ này mà chỉ dùng <Link/> trang sẽ bị trắng tinh khôi hoặc trang sẽ bị lỗi 404

- Link: giống như thẻ a, dùng đẻ điều hướng tới các trang khác mà không bị reload

- NavLink (1 lưu ý là NavLink chỉ thích hợp để làm navigation bar, bởi vì một số ràng buộc về prop `to`, khi thực sự không cần thiết thì nên sử dụng `Link`): Cũng giống link nhưng thường sử dụng để làm navigation bar hoặc các link cần thuộc tính isActive, NavLink isActive được sử dụng như sau:

```jsx
<>
  <NavLink
    style={({ isActive }) => {
      return {
        color: isActive ? "red" : "black",
      };
    }}
    {/*
    Nếu đang ở trong trang đó thì isActive === true và khi đó thẻ NavLink này sẽ đổi màu sang màu đỏ. VÀ NGƯỢC LẠi, nếu đang ở trang khác thì NavLink này sẽ chuyển sang màu đen và NavLink trang kia sẽ có isActive === true
    */}
    className="block"
    to={`/learn/courses/${randomCourseName}`}
  >
    {randomCourseName}
  </NavLink>
  <NavLink
    style={({ isActive }) => {
      return {
        color: isActive ? "red" : "black",
      };
    }}
    className="block"
    to={`/learn/courses/tests`}
  >
    Test
  </NavLink>
</>
```

- Outlet: Đóng vai trò giống như content của trang khi ta sử dụng Nested Routes
  VD:

```js
// Tạo ra 2 đường link dẫn tới 2 đường dẫn khác nhau như sau:
const Learning = () => {
  return (
    <div className="learn">
      <Link to={"/learn/courses"}>Show your courses</Link>
      <Link to={"learn/bundles"}>Show your bundles</Link>
    </div>
  );
};
```

- Tiếp theo, ta sẽ tạo ra nội dung của trang chứa đường dẫn `/learn/courses` này:

```js
import React from "react";

const Courses = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <div>Course 1</div>
      <div>Course 2</div>
      <div>Course 3</div>
      <div>Course 4</div>
      <div>Course 5</div>
      <div>Course 6</div>
    </div>
  );
};

export default Courses;
```

- Ngoài ra, còn một điều quan trọng nữa là, ở bên App.js chúng ta cũng không được quên phải định nghĩa component bạn muốn hiển thị cho Route nữa:

```jsx
// Có 2 cách mà thường các trang web sẽ làm
// Cách 1: làm biến mất nội dung của trang /learn, sau đó điều hướng sang learn/courses
function App() {
  return (
    <>
      <PagesLink></PagesLink>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/navigate"
          element={<Navigate replace to={"/learn"}></Navigate>}
        ></Route>
        <Route path="/learn" element={<Learn></Learn>}></Route>
        <Route path="/learn/bundle" element={<Bundle></Bundle>}></Route>
        <Route path="/learn/courses" element={<Courses></Courses>}></Route>
        {/*
        Tạo ra 2 đường dẫn nằm ngoài như này, để khi click vào thì nội dung của Outlet không chứa nội dung của /learn. HAY nói cách khác, là các nội dung mà bạn thấy trong trang /learn sẽ biến mất khi bạn click sang trang courses
        */}
      </Routes>
    </>
  );
}
```

- Sau khi code như trên xong, các bạn biết ta sẽ phải đặt Outlet ở đâu rồi chứ, đọc khái niệm thì Outlet chính là nội dung của trang web, mà nội dung của trang web đang nằm hoàn toàn trong Routes, vậy nên ta phải đặt Outlet ở dưới cùng file PagesLink, như sau:

```jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
const PagesLink = () => {
  return (
    <>
      <ul>
        <li>
          <Link className="text-blue-300" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-300" to="/learn">
            Learn
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
      {/*
      Đây Outlet nằm ở đây
      */}
    </>
  );
};

export default PagesLink;
```

- Hoặc bạn có thể đặt ở dưới `<PagesLink></PagesLink>` nằm trong file `App.js`

```jsx
// Cách 2: Giữ nguyên nội dung trang /learn nhưng vẫn điều hướng sang trang /courses, nhưng courses sẽ nằm ở đâu đó dựa trên Outlet, trong trường hợp này mình sẽ code nằm dưới nội dung trang /learn

// Đầu tiên là sửa lại đoạn code ở cách 1 bằng cách sử dụng nested routes (routes lồng nhau)
function App() {
  return (
    <>
      <PagesLink></PagesLink>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/navigate"
          element={<Navigate replace to={"/learn"}></Navigate>}
        ></Route>
        <Route path="/learn" element={<Learn></Learn>}>
          <Route path="courses" element={<Courses></Courses>}></Route>
          <Route path="bundle" element={<Bundle></Bundle>}></Route>
        </Route>
        {/*
        Đó thì như bạn thấy đây, Route chứa path /learn đang lồng vào 2 thằng course và bundle (lưu ý nếu sử dụng nested routes thì không cần tới dấu "/", BÂY GIỜ ta sẽ không thể sử dụng Outlet ở trang )
        */}
      </Routes>
    </>
  );
}
```

- Nào, giờ chúng ta sẽ cùng đặt lại `Outlet` nha, nếu sử dụng `Nested Routes` như trên kia, thì Outlet phải nằm ở dưới cùng của file `Learn.js` (tức là dưới cùng của file chứa thằng Route cha và ở đây là `Learn.js`), vậy nên ta sẽ đặt `Outlet` như sau:

```jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div className="learn">
      <h3>This is a learnpage</h3>
      <h4>All courses are listed here</h4>
      <ul>
        <li>
          <Link className="font-bold text-green-400" to={"/learn/courses"}>
            Courses
          </Link>
        </li>
        <li>
          <Link className="font-bold text-green-400" to={"/learn/bundle"}>
            Bundle
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
      {/* Đây Outlet nằm ở đây */}
    </div>
  );
};

export default Learn;
```

- Trang web sẽ được như sau ^^:
  ![Outlet learning](https://discloud-storage.herokuapp.com/file/cf53ea0b867ea5dd563ce16a4c80f634/route.png)

- Ngoài ra `Outlet` còn có 1 prop bạn có thể truyền vào đó chính là context, ví dụ như sau:

```jsx
<Outlet context={{ hello: "World" }}></Outlet>
```

- Sau đó bất kì component nào nằm trong phạm vi của Outlet này sẽ có key and value `hello: "World"` này, và muốn lấy ra thì cũng đơn giản thôi, ta sẽ sử dụng một cái `hook` của react router 6 đó chính là:

- useOutletContext: Lấy ra context bạn truyền vào từ component cha, như sau:

```jsx
function Learn.js(){
  const obj = useOutletContext();
  return (
    <div>
    {obj.hello}
    </div>
  )

}
```

- useParams :

  - Trong useParam có 1 thứ gọi là slug, vậy nó là gì ?
  - Ví dụ giờ ta có một api :<br>
    fetching.com/blog?search=hello-world
  - // slug sẽ là thứ nằm sau blog/
  - VD: localhost:3000/blog/hello-world
  - Thì slug sẽ = hello-world

- useNavigate: Dùng để navigate sử dụng url path:

```jsx
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/about-us", { state: "Khoi" })}></button>
    </>
  );
};
```

- Update một số thứ hay của navigate:

      - Nếu bạn muốn navigate lại các trang cũ mà nằm trong history thì có thể truyền **`số âm`** vào bên trong `navigate()`, ví dụ:

      ```jsx
      const NotFoundPage = () => {
      const navigate = useNavigate();
      useEffect(() => {
        navigate(-1);
      },[])
      return (
          <div>
            Not Found
          </div>
        );
      };
      ```

      - replace: Thay thế stack history

- useLocation: Gồm rất nhiều thuộc tính (pathName, hash, search, state, key), dùng để truyền state, lấy ra pathName, ...

- Navigate component: Dùng để redirect ngay khi chuyển sang một trang khác (thường là các trang 404 Not Found)

## Higher Order Components

- Khi ta phát triển một component, và nó sử dụng đi, sử dụng lại một logic nào đó và chúng ta muốn sử dụng cái logic đó từ component này qua component kia mà không cần phải viết lại -> THÌ ta sẽ phải sử dụng HOCS

- HOC là kỹ thuật nâng cao trong React, không phải là một React API. HOC là một function nhận vào một component và return về một component mới

- Kỹ thuật này cùng với render props thường được sử dụng trước khi hình thành ra khái niệm custom hooks

- Ví dụ, ta có component A sử dụng axios để fetch data về, và khi data chưa được fetch về ta sẽ có một hiệu ứng loading. Ở component B và component C, ta cũng sẽ sử dụng axios để fetch data về, nhưng ta lại không muốn lặp lại những dòng code ở component A, mà muốn tái sử dụng lại logic của nó -> Ta sẽ phải áp dụng HOCS để làm việc này

### Ví dụ về việc tái sử dụng logic của HOC

Ví dụ như tự động đăng ký sự kiện khi render component và hủy đăng ký khi component unmount

```jsx
const CommentList = (props) => {
  return <div>Comment List</div>;
};

const BlogList = (props) => {
  return <div>Blog List</div>;
};

const withSubscription = (WrappedComponent) => {
  const newComponent = (props) => {
    useEffect(() => {
      subcribe("Đăng ký!");
      return () => {
        unsubcribe("Hủy đăng ký!");
      };
    }, []);
    return <WrappedComponent {...props} />;
  };
  return newComponent;
};

const NewCommentList = withSubscription(CommentList);
const NewBlogList = withSubscription(BlogList);
```

Trong một số trường hợp thì chúng ta có thể custom hook để xử lý use case trên mà không cần dùng đến HOC

### Truyền những prop không liên quan vào component mà không làm thay đổi cách dùng của component gốc

```jsx
const CommentList = ({ commentList,profile }) => {
  console.log(profile)
  return <div>Comment List</div>
}

const BlogList = ({ blogList, profile }) => {
  console.log(profile)
  return <div>Blog List</div>
}


const connect = (WrappedComponent, newProps) => {
  return (props) => {
    return <WrappedComponent {...props} {...newProps} />
  }
}

const NewCommentList = connect(CommentList, {profile: {name: 'Khoi'}})
const NewBlogList = connect(BlogList, {profile: {name: 'Khoi'}})

const App = () => (
  return (
    <div>
    <NewCommentList commentList={commentList}/>
    <NewBlogList blogList={blogList}/>
    </div>
  )
)
```

Trong một số trường hợp thì chúng ta cũng có thể custom hook để xử lý use case trên mà không cần dùng đến HOC

### Một số lưu ý khi dùng HOC

- Đừng dùng HOC bên trong render method hoặc trong function component

```jsx
render() {
  // Một phiên bản mới của EnhancedComponent được tạo ra mỗi khi render
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // Gây nên việc EnhancedComponent bị unmount/remount mỗi lần render!
  return <EnhancedComponent />;
}
```

Đây không chỉ là vấn đề về hiệu suất mà còn là logic, nó sẽ làm component bị unmount liên tục mỗi khi re-render

- `ref` sẽ không được truyền xuống component, vì `ref` không thực sự là một prop, nó được xử lý bởi React. Giải pháp cho vấn đề này là chúng ta dùng `React.forwardRef` API

## Vấn đề khi sử dụng HOCS

1. Giả dụ giờ ta có 1 props data được truyền vào bên trong Component ở file withLoading

```js
function withLoading(Component) {
  return (props) => {
    useEffect(() => {
      // Fetching data code...
    }, []);
    return (
      <Component
        data={data} // Đây là props data 💛
        {...props}
      ></Component>
    );
  };
}

export default withLoading;
```

- Sau đó bên file App.js ta cũng tạo ra một biến có tên là data

```js
const data = [1, 2, 3];
```

- Truyền vào bên trong components ở bên dưới, VD:

```js
<Homepage data={data}></Homepage>
```

- Thì vô hình chung, khi bạn get ra data ở Homepage thì data sẽ không còn là data mà bạn fetch được từ api ở file withLoading.js nữa, mà sẽ là data được lấy từ data ở App.js

2. Nếu sau này bạn tạo thêm các file sử dụng nhiều HOCS khác nhau mà muốn sử dụng ở nhiều components cũng gây ra rất nhiều trắc trở, khó khăn khi debug.

- Ví dụ là ở 3 components A, B, C đi, cả 3 component này đều sử dụng withLoading.js, withErrorBoundaries.js, withSearch.js,...

- Thì ở phần

```js
export default ComponentName;
```

- Bạn sẽ phải bọc tất cả các HOCS kia vào mỗi cái trong 3 components đó, sau này còn rất nhiều lỗi phát sinh, nó báo lỗi mình không biết lỗi trong file nào rất khó debug.

```js
// Component A:
export default withLoading(withErrorBoundaries(withSearch(ComponentA)));
// Component B:
export default withLoading(withErrorBoundaries(ComponentA));
// Component C:
export default withLoading(withErrorBoundaries(withSearch(ComponentC)));
// Giờ mà lỗi thì ối dồi ôi luôn, không biết đang conflict với cái nào
```

## Lifting State

- Là trường hợp khi bạn tạo state ở component cha và truyền xuống các component con

- Nhược điểm: Khi làm dự án lớn nếu ta cứ liên tục chọc ngoáy state của thg component cha xuống component con rồi truyền qua hàng đống component khác như vậy thì mình đã nói rồi -> nó sẽ gây ra hiện tượng props drilling

# Props Render - một phương pháp để xử lí Lifting State & Props Drilling

- Props Render là một hình thức chia sẻ code giữ các React components bằng cách dùng một đối tượng props có giá trị là một function
  VD:

```js
// Bên file Header.js tạo 1 component Header
const Header = (props) => props.render();

export default Title;
// Bên file App.js thực hiện render ra nội dung:
<Header render={(yourName) => <h1>Hello {yourName}</h1>}></Header>;
```

- Hoặc ta cũng có thể sử dụng props.children() như sau:

```js
// Bên file Header.js tạo 1 component Header và thực hiện 1 số thao tác như sau:
const Header = (props) => props.children();

// Bên file App.js thực hiện nhét nội dung vào giữa thẻ đóng và thẻ mở của Component Header
<Header>{(yourName) => <h1>Hello {yourName}</h1>}
```

- Vài lưu ý khi sử dụng props rendering:

  - Ví dụ, bạn đang có một ComponentA, bên trong ComponentA lại có 1 component khác nữa (tạm gọi là ComponentB) và bên trong ComponentB lại có ComponentC và mỗi component đó đều sử dụng props render như sau:

  ```js
  const MyComponent = () => {
    return (
      <div>
        <ComponentA>
          {(value) => (
            <div>
              <ComponentB>
                {(value2) => (
                  <div>
                    <ComponentC>
                      {(value3) => (
                        <div>
                          <span>Hahaha</span>
                        </div>
                      )}
                    </ComponentC>
                  </div>
                )}
              </ComponentB>
            </div>
          )}
        </ComponentA>
      </div>
    );
  };
  ```

  - Nhìn vào code ở bên trên thì chúa Giê Su cũng chỉ muốn hiện lên và nói với bạn rằng kys

- Cũng có kha khá các thư viện nổi tiếng hiện nay vẫn sử dụng render props, điển hình như là Formik, Downshift và React Router

# Tổng quan sơ lược lại về HOCS, Render Props và Custom hooks

- Dùng cái nào là theo quyết định của leader, mỗi cái đều có một ưu điểm riêng, nên học cả 3 để hiểu cả 3, đồng thời hiểu được cách dùng để học các thư viện, đọc code người khác, phỏng vấn, ...

# React Composition (Compound Component)

- Dùng để chia nhỏ component thành các components nhỏ hơn để dễ dàng xử lí và maintain, hạn chế việc xây dựng quá nhiều components và giống nhau
- VD ta code như sau:

```js
// file Accordion.js
const Accordion = () => {
  const [show, setShow] = useState(false);
  const handleToggleShow = () => {
    setShow((show) => !show);
  };
  return (
    // Something...
  );
};

// file Editable.js
const Editable = () => {
  const [edit, setEdit] = useState(false);
  const handleToggleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    // Something...
  );
};
```

- Thì ở 2 đoạn code trên bạn có thấy đoạn code nằm trên dòng return nó giống y đúc nhau không... Nếu là "CÓ" thì bạn đoán chuẩn rồi, giờ ta sẽ cùng tìm cách làm thế nào để làm code gọn hơn, dễ hiểu hơn

- Ta sẽ sử dụng custom hooks kết hợp với context, trong đó:

  - Custom Hook sẽ viết logic để xử lí việc đóng mở accordion, edit section
  - Context sẽ sử dụng để rút ngắn code, lược bớt props truyền vào component từ đó giúp component trông gọn gàng hơn, sau này ai muốn xem code thì dễ debug và maintain hơn

# Props Collection - học từ Kentc Dodds (aka creator of Remix)

- Props Collection (Props được lưu dưới dạng danh sách)

- Ví dụ bây giờ bạn muốn thực hiện 2 hoặc nhiều chức năng cùng một lúc khi click vào một thẻ nào đó, ví dụ như sau:

```js
// Function bật/tắt
function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  return {
    on,
    handleToggle,
  };
}

// Trong component invoke chức năng khi onClick
<button
  onClick={() => {
    console.log("Hello man"); // function thứ nhất
    handleToggle(); // function thứ hai
  }}
>
  Nhấn vào tôi >.<
</button>;
```

- Thì bạn có thể thấy cách này trông không được hay cho lắm, vì vậy nên ta có thể sử dụng kiến thức về props collection vọc được từ Kentc Dodds:

```js
// Function bật/tắt
function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  // toggleProps
  return {
    on,
    toggleProps: {
      onClick: handleToggle, // thực hiện chức năng handleToggle nằm ở bên trên
    },
  };
}
// Trong component thực hiện các chức năng nằm trong toggleProps:
<button {...toggleProps}>
  Nhấn vào tôi >.<
</button>;

```

- Nhưng như vậy là chưa đủ để có thể invoke 2 function cùng 1 lúc, ta sẽ cùng tiếp tục tìm hiểu tới phần tiếp theo

# Props Getter

- Như bạn thấy ở nội dung trên thì đó là cách truyền 1 object là toggleProps, chứa 1 function vào trong 1 element/component

- Giờ ta sẽ tìm hiểu xem làm cách nào để sử dụng props getter

- Props getter được sử dụng nhằm mục đích chính là để code trông sạch hơn, chứ không truyền props loạn xạ vào trong component, ngoài ra còn hỗ trợ bạn khi bạn muốn inject thêm code vào 1 sự kiện nào đó (onClick, onChange, ...etc)

- Nói vậy có thể bạn chưa hiểu thì bây giờ mình sẽ ví dụ một trường hợp như sau:

  - Buổi sáng thứ 7, bạn thức dậy và điều đầu tiên bạn làm là BẬT công tắc đèn lên để DẬY ĐÁNH RĂNG
  - Nhưng sang buổi sáng chủ nhật, bạn được nghỉ ngơi nên bạn chỉ bật công tắc đèn và nằm đó tiếp không thực hiện bất kì thứ gì khác

- Giờ ta áp dụng vào code:

```js
function useToggle() {
  const [on, setOn] = useState(false);
  const batDen = () => {
    setOn(true);
  };
  function getToggleProps({ onClick, ...props } = {}) {
    return {
      onClick: () => {
        onClick && onClick(); // Nếu mà trong getToggleProps mà có 1 props là onClick thì thực hiện function onClick nằm trong props đó
        batDen(); // Thực hiện chức năng bật đèn lên
      },
      ...props,
    };
  }
  return {
    on,
    getToggleProps,
  };
}
// Sáng thứ 7
const SangThu7 = () => {
  return (
    <>
      <button
        {...getToggleProps({
          onClick: () => {
            dayDanhRang(); // lúc này ta sẽ inject đoạn code dayDanhRang vào đây, bởi vì sáng thứ 7 ta bật đèn xong đánh răng mà
          },
        })}
      >
        {on ? "Đèn đang bật" : "Đèn đang tắt"}
      </button>
      ;
    </>
  );
};
// Sáng chủ nhật
const SangChuNhat = () => {
  return (
    <>
      <button
        {...getToggleProps()} // lúc này ta không truyền gì vào cả, bởi vì sáng chủ nhật ta chỉ dậy bật đèn và nằm đó thôi mà, chứ không làm gì thêm
      >
        {on ? "Đèn đang bật" : "Đèn đang tắt"}
      </button>
      ;
    </>
  );
};
```

- Đây là 1 ví dụ đơn giản về props getter và props collection hoy, còn rất nhiều thứ khác và nói thật thì cái này rất khó viết và khó học

- Sau này các dự án ở công ty thường sẽ không sử dụng các cách mình đã và đang chuẩn bị viết thêm sau đây, họ thường sẽ viết custom hooks và context nhiều hơn, và đa số là đều đã và đang sử dụng Redux, Zustard rồi, các code này chỉ để tham khảo, học thêm để biết thêm kiến thức áp dụng vào project cá nhân hoặc để hiểu khi đọc code của người khác (phòng trường hợp người ta sử dụng cách này) thôi ^^ thui nói tới đây thui cya

# Control Props - 1 kiến thức cực advanced, suy nghĩ kĩ trước khi đọc (bởi tôi cũng chưa hiểu rõ nữa :( )

- Control Props là 1 pattern biến cái component của các bạn thành 1 controlled component.

- Controlled Components là những thứ như input, select,textarea, ... đại khái là những thứ có state của riêng nó dựa vào user input, giờ ta sẽ làm 1 ví dụ tăng/giảm số đơn giản như sau:

- Ví dụ giờ ta có 1 component như sau:

```js
const CounterControlProps = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex text-[25px] items-center border-2 rounded-lg border-gray-200 w-full gap-x-5 max-w-[200px] mx-auto my-6 justify-around">
      <button
        onClick={() => setCount((count) => count - 1)}
        className="cursor-pointer select-none decrement"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => setCount((count) => count - 1)}
        className="cursor-pointer select-none increment"
      >
        +
      </button>
    </div>
  );
};
```

- Như bạn thấy ở trên thì đây chỉ là 1 bài toán cộng trừ số cơ bản của React mà ai cũng biết

- Giờ ta sẽ tách 2 cái button và mục hiển thị số kia ra thành 3 component riêng biệt, lần lượt là: Decrement, Count, Increment, ta sẽ được như sau:

```js
const CounterControlProps = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex text-[25px] items-center border-2 rounded-lg border-gray-200 w-full gap-x-5 max-w-[200px] mx-auto my-6 justify-around">
      <Decrement></Decrement>
      <Count></Count>
      <Increment></Increment>
    </div>
  );
};
```

- Lúc này thì để giữ được chức năng bấm dấu "+" và dấu "-" được giữ nguyên thì 1 là ta phải truyền state dưới dạng props vào components, 2 là ta viết state riêng cho từng component (thứ mà không được khuyến khích làm cho lắm vì nó dễ gây loạn và không được tối ưu)

- Sau này khi đi làm, thì việc các devs khác làm lại chức năng của mình cũng xảy ra kha khá nhiều, ví dụ khi là chức năng của mình, giá trị khởi tạo là con số 0 rồi khi nhấn nút "tăng/giảm" thì chỉ tăng/giảm 1 đơn vị thôi, sau này các devs khác muốn làm lại chức năng (vd: tăng/giảm 3 đơn vị, giá trị khởi tạo là 5) thì lại phải lục lại code -> KHÁ TỐN THỜI GIAN
  <br>
  -> Vậy nên ta sẽ sử dụng control props để các devs khác có thể ghi đè lên logic code của mình

## Vậy ta phải làm thế nào ?

- Đầu tiên tạo 1 file counter-context.js, nếu không biết viết context, bạn có thể tìm hiểu ở đây

  - [Context Trong React Viblo](https://viblo.asia/p/context-api-trong-react-XL6lAovJKek)
  - [React Documentation - Context](https://en.reactjs.org/docs/context.html)

- Như sau:

```js
import { useContext } from "react";
import { createContext } from "react";

const CountContext = createContext(undefined);
function CountProvider({ value, ...props }) {
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined") {
    throw new Error("useCount must be used within CountProvider");
  }
  return context;
}

export { useCount, CountProvider };
```

- Sau đó ta sẽ sang file CounterControlProps.js nha:

```js
const CounterControlProps = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  // 2 dấu chấm than sẽ convert giá trị đó sang dạng boolean
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);
  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };
  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };
  return (
    <CountProvider
      value={{ handleDecrement, handleIncrement, count: getCount() }}
    >
      <div className="flex text-[25px] items-center border-2 rounded-lg border-gray-200 w-full gap-x-5 max-w-[200px] mx-auto my-6 justify-around">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};
```

- Giờ mình sẽ giải thích từng giá trị props được truyền vào trong component nha

```js
// Giải thích từng props cho các bạn hiểu
// value: là một prop mà các devs khác sẽ truyền vào bên App.js để chỉnh sửa logic
// initialValue là prop để gán giá trị khởi tạo cho state count kia khi mà không truyền value vào
// Như sau:
<CounterControlProps
value={} // không truyền value vào
></CounterControlProps>
// onChange là hàm để các devs khác đè logic code của họ vào logic code của mình VÀ NẾU KHÔNG CHÈN LOGIC CODE NÀO THÌ VẪN PHẢI TRUYỀN VÀO COMPONENT dưới dạng function rỗng
// Như sau:
<CounterControlProps
value={} // không truyền value vào
onChange={() => {}} // function rỗng
></CounterControlProps>
```

- Bên file Increment và Decrement các bạn đơn thuần chỉ cần sử dụng function handleIncrement và handleDecrement và gán cho event onClick thôi, như sau:

```js
// file Increment.js
const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <div
      onClick={handleIncrement}
      className="cursor-pointer select-none increment"
    >
      +
    </div>
  );
};

// file Decrement.js
const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      onClick={handleDecrement}
      className="cursor-pointer select-none decrement"
    >
      -
    </button>
  );
};
```

- Có thể bạn sẽ thắc mắc: Ủa, handleIncrement và handleDecrement được lấy từ đâu ra vậy?
- Thì xin thưa rằng là nó được truyền vào từ prop value của CounterProvider

```js
<CountProvider
  value={{ handleDecrement, handleIncrement, count: getCount() }}
></CountProvider>
```

- Và đương nhiên chức năng của 2 function đó đã được xử lí trong file CounterControlProps.js, bạn có thể scroll lại lên trên để đọc cách viết

## Bây giờ, ta sẽ cùng tìm hiểu cách làm thế nào để các devs khác có thể chèn logic code của họ vào code cùa mình mà không cần mở file CounterControlProps.js ra nhé

- Giờ giả dụ mình là dev khác và muốn chèn 1 đoạn code có logic như sau: Set cho giá trị khởi tạo của state count là 5 và khi tăng giá trị count > 10 thì tự động set giá trị count về 0

```js
function App() {
  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };
  return (
    <div>
      <CounterControlProps
        value={count}
        onChange={handleCountChange}
      ></CounterControlProps>
    </div>
  );
}
```

- Đó thì đây là ví dụ đơn giản thui, sau này đi làm tới level cao hơn thì còn kha khá nhiều vấn đề cần phải viết thêm ^^

# Inversion Of Control

Là mức độ kiểm soát và độ linh hoạt của component đó khi ta hoặc các lập trình viên khác sử dụng chúng

Độ phức tạp của việc kiểm soát component được sắp xếp theo thứ tự tăng dần:

```ts
Compound Component -> Control Props -> Custom Hook -> Props Getter -> State Reducer
```

Các bạn có thể hiểu rằng khi đi làm sẽ có rất nhiều trường hợp có thể xảy ra, khách hàng sẽ sáng nắng chiều mưa và họ đòi ta phải thay đổi rất nhiều nên việc ta code ra một component dễ thay đổi và tiện để bảo trì là một điều nên làm

Chứ không phải là mỗi lần được giao thêm một cái gì mới ta lại lục lại và hí hoáy sửa sửa thêm thêm. Lúc bắt đầu có thể có rất ít props, nhưng càng về sau ta cứ thêm dần như vậy thì nó sẽ rất là bự (>8 props).

Vậy nên ta phải code làm sao cho tiện nhất có thể, và cái mình muốn nói ở đây là Inversion Of Control

# useMemo, useCallback và React.memo

Khi code ra 1 website lớn, ta rất cần chú trọng vào hiệu năng của trang web nhằm nâng cao trải nghiệm của người dùng. Vì vậy khi code React ta sẽ phải tìm ra cách làm sao để các component `không re-render khi không cần thiết`. Ta hãy cùng làm 1 ví dụ sau để hiểu tại sao cần phải học về React.memo, useMemo và useCallback:

- Đầu tiên, mình sẽ tạo ra một component `Count`, các bạn hãy chú ý vào giá trị của `renderRef` trong component này, giá trị này dùng để nhận biết khi nào component bị re-render bằng cách tăng 1 đơn vị mỗi khi re-render (LƯU Ý: HÃY XÓA <React.StrictMode/>):

```jsx
const Count = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Renders: {renderRef.current++}</div>
      <button
        className="p-3 font-medium text-white bg-blue-400 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Increase
      </button>
    </div>
  );
};
```

- Ok, bây giờ ta nhét nó vào App.js để hiển thị ở website:

```jsx
function App() {
  return (
    <>
      <Count></Count>
    </>
  );
}
```

- Mọi thứ vẫn rất là bình thường và các bạn có thể thấy khi nhấn vào button `Increase` thì cả `giá trị của state count` và `renderRef.current` đều `tăng lên 1` mỗi lần nhấn

![Ảnh](https://i.ibb.co/HqqnDJk/image.png)

- Bây giờ, mình sẽ thử tạo một cái input nhỏ nhỏ xinh xinh nằm trên `<Count></Count>`, đồng thời tạo một state là `filter` để test thêm xem khi input re-render thì các component khác nằm cùng file có bị re-render không:

```jsx
function App() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count></Count>
    </>
  );
}
```

- Và whoa la, khi bạn nhập vào input thì `renderRef.current` cũng sẽ `tăng lên 1`. Điều đó chứng tỏ điều gì? Chứng tỏ là component Counter đã re-render khi input bắt sự kiện onChange mỗi lần bạn nhập một từ vào mặc dù hai Component trông có vẻ không hề liên quan tới nhau

Vậy nên, bây giờ ta sẽ phải sử dụng tới `React.memo`. Chúng ta dùng `React.memo` khi không muốn component bị re-render mỗi khi component cha re-render:

```jsx
// Wrap component lại = React.memo và thử F5 và nhập vào input
const Count = React.memo(() => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Renders: {renderRef.current++}</div>
      <button
        className="p-3 font-medium text-white bg-blue-400 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Increase
      </button>
    </div>
  );
});
```

Khi React.memo() bao quanh một component, React sẽ `ghi nhớ kết quả render` và `bỏ qua các quá trình render không cần thiết`, nhằm tối ưu hóa việc hiệu năng của quá trình render các functional component.

Bây giờ, mình sẽ truyền 1 prop là `calculate` vào component Count, để xem component đó có re-render không nha:

```js
function App() {
  const [filter, setFilter] = useState("");

  // Đoạn code mới
  const calculate = () => {
    setFilter("");
  };

  return (
    <>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg"
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* Thêm prop calculate */}
      <Count calculate={calculate}></Count>
    </>
  );
}
```

Như các bạn thấy, component Count lại một lần nữa re-render mỗi lần bạn nhập, ở đây prop `calculate` chỉ là một function nhưng khi các bạn thay đổi giá trị của state filter -> component sẽ re-render và giá trị của `calculate` cũng sẽ thay đổi mỗi lần re-render. Cái này mình cũng không bít nói rõ hơn sao nữa nhưng mà mỗi lần re-render là `calculate` nó như thay đổi giá trị nào đó của mình vậy

Vậy thì, đối với trường hợp này ta phải sử dụng useCallback để có thể tối ưu re-render, cú pháp của nó sẽ như sau:

```jsx
useCallback(() => callback, [deps]);
```

Áp dụng vào trong bài toán hiện tại ta được:

```jsx
// Chỉ re-render khi setFilter thay đổi
const calculate = useCallback(() => {
  setFilter("");
}, [setFilter]);
```

Ok, vậy là chúng ta đã xong trường hợp tối ưu re-render khi prop truyền vào là một function, giờ ta sẽ tới object,array,...

```jsx
function App() {
  const [filter, setFilter] = useState("");
  const calculate = useCallback(() => {
    setFilter("");
  }, [setFilter]);

  // Đoạn code mới
  const data = { success: false };

  return (
    <>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg"
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* Prop mới */}
      <Count calculate={calculate} data={data}></Count>
    </>
  );
}
```

Nếu ta để im như hiện tại, thì chắc chắn component sẽ lại liên tục re-render khi ta nhập vào input, vậy nên bây giờ ta sẽ phải sử dụng tới useMemo

Cú pháp của useMemo sẽ như sau:

```jsx
useMemo(() => value, [deps]);
```

Áp dụng vào bài toán hiện tại ta sẽ có như sau:

```jsx
function App() {
  const [filter, setFilter] = useState("");
  // useCallback(() => callback, [deps]);
  const calculate = useCallback(() => {
    setFilter("");
  }, [setFilter]);
  // useMemo(() => value, [deps]);
  const data = useMemo(() => ({ success: false }), []);
  return (
    <>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} data={data}></Count>
    </>
  );
}
```

Dẫu nghe có vẻ hay, nhưng khi các bạn lạm dụng quá nhiều, code cho component nào cũng sử dụng `useCallback` và `useMemo` thì bộ nhớ (RAM) được dùng để lưu trữ sẽ càng ngày càng nhiều và đồng thời cũng làm giảm hiệu năng chính user. Vậy nên không nên lạm dụng, chỉ nên sử dụng khi thứ đó thực sự làm cho web re-render quá nhiều lần và mỗi lần re-render thường thay đổi rất nhiều thứ trên UI, vì bản chất React cũng nhanh sẵn rồi, ta không cần phải optimize quá vấn đề đó khi chưa cần thiết

# React Error Boundary

- React Error Boundary là 1 thư viện của React giúp bắt các lỗi trong component và các components con của nó, ví dụ trong **trang đọc báo**, bạn sẽ có 3 thành phần chính đó chính là **các bài báo**, **thanh điều hướng** hay nói cách khác là navigation bar, **Phần footer**

- Giả dụ khi 1 trong 3 thành phần này bị dính lỗi ngoài ý muốn, thì theo lẽ thường -> ngay lập tức trang web sẽ bị **trắng tinh**, **mất hết nội dung** và **hiển thị lỗi đỏ trong bảng console**. Điều này sẽ làm ảnh hưởng tới trải nghiệm người dùng!!!

- Vì vậy, ta đã có **REACT-ERROR-BOUNDARY** để khắc phục tình trạng này, nó sẽ giúp ta bằng cách thay vì trang web bị **trắng tinh và mất hết nội dung**, nó sẽ chỉ hiển thị lỗi của 1 trong 3 thành phần đó và 2 thành phần còn lại vẫn hoạt động như thường, và ngoài ra nó còn giúp ta reset lại trạng thái ban đầu của thành phần web bị lỗi, **TUYỆT CMN VỜI**. Giờ mình sẽ làm 1 ví dụ ngắn:

```jsx
import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

// Nội dung để hiển thị khi component nào đó bị lỗi
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="text-red-500 p-4">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Ví dụ đây là component bị lỗi */}
        <ErrorComponent></ErrorComponent>
      </ErrorBoundary>
    </>
  );
}

export default App;
```

- Bên ErrorComponent.js, ta sẽ cố tình tạo ra lỗi như sau:

```jsx
import React from "react";
import { useState } from "react";

const ErrorComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  {
    /*
  Lỗi nằm ở function truyền vào onClick, đáng lí ra phải truyền vào là handleClick, nhưng mình sẽ cố tình viết thiếu chữ "k" xem sao
  */
  }
  return <div onClick={handleClic}>Aaaa, tôi bị lỗi</div>;
};

export default ErrorComponent;
```

- Và đây là kết quả khi mình xem ở trình duyệt:

![Ảnh](https://discloud-storage.herokuapp.com/file/0b22739c36f8f1bb4299b0a51a623b35/error.png)

- Như các bạn thấy, nó đã báo lỗi thành công rồi, giờ mình sẽ thử đặt 1 **component** không bị lỗi bên dưới **component bị lỗi** nhé, và đương nhiên ta sẽ không bọc nó trong component ErrorBoundary rồi:

![Ảnh](https://discloud-storage.herokuapp.com/file/3ed8780ff4554748a323b5cb0638331d/error.png)

- Như bạn thấy, component dưới vẫn hiển thị như thường và chỉ có component nào lỗi thì nó mới hiện lỗi

# Firebase

- Firebase là một realtime-database, một giải pháp hoàn hảo nếu ta chưa biết hoặc không biết code BE!

- collection: `Dùng để lấy ra thông tin của collection`, cần truyền vào database và tên collection
- getDocs: `Dùng để lấy ra tất cả dữ liệu của documents nhưng không real-time`

- getDoc: Có getDocs đương nhiên cũng phải có getDoc, getDoc thường được `sử dụng để hiển thị chi tiết của một document`:

  - _VÍ DỤ:_ Khi bạn mua hàng trên Shoppee,` mỗi sản phẩm` đều có `chi tiết sản phẩm của riêng nó`, vậy nên khi `click vào sản phẩm nào` thì ta phải `getDoc sản phẩm đó` để `lấy ra thông tin sản phẩm`.

- addDoc: `Dùng để thêm document`, cần truyền vào collection reference và 1 object chứa các field và value của doc đó

- deleteDoc: `Dùng để xóa document`, cần truyền vào thông tin của doc mà bạn muốn xóa (bao gồm: `database exported từ firebase-config.js`, `tên collection`, `và id của document mà mình muốn xóa`)

- onSnapShot: Lấy ra tất cả dữ liệu của documents, cập nhật real-time, CRUD là hiển thị ra ngay trong browser, không cần F5, cách truyền dữ liệu của thằng này thì cũng khá lạ, nếu ở getDocs hay getDocs bạn sử dụng .then hoặc async await thì sẽ khác một chút so với thằng này:

```js
// Lấy ra thông tin của bài post có ID là jsNhECuN9Odnry7XGR4q
const singleDocRef = doc(db, "posts", "jsNhECuN9Odnry7XGR4q");
// sử dụng getDoc để lấy ra thông tin của bài post (cách này không real-time)
getDoc(singleDocRef).then((doc) => {
  console.log(doc.id, doc.data());
});

// sử dụng onSnapShot để lấy ra thông tin của bài post (cách này có cập nhật real-time)
onSnapshot(singleDocRef, (doc) => {
  console.log(doc.id, doc.data());
});
```

- Như bạn thấy thì ở **getDoc** sẽ trả về 1 Promise nên ta **sử dụng then để GET dữ liệu** của doc. Còn với **onSnapshot** ta sẽ **truyền vào 2 arguments** là **singleDocRef (reference tới doc trong collection posts)** và **1 argument nữa là callback function**, chứ không sử dụng then hay async await

# Truy vấn dữ liệu nâng cao với Firestore Queries

- Các kiến thức về truy vấn này, nếu bạn đã được học trước về SQL cơ bản thì sẽ khá dễ tiếp cận với các syntax này, bởi vì SQL thực chất còn khó hơn thế này rất nhiều

- limit: Giới hạn số lượng kết quả truy vấn được (ví dụ mình có 25 bài viết nhưng mình có thể limit lại chỉ hiển thị 5 bài viết thôi), mình sẽ ví dụ với limit là 5:

```js
const colRef = collection(db, "posts");
useEffect(() => {
  const q = query(colRef, limit(5));
  // Log ra các documents
  onSnapshot(q, (snapshot) => {
    let posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(posts);
  });
}, [colRef]);
```

- orderBy: Sắp xếp kết quả truy vấn được theo thứ tự tăng dần hoặc giảm dần theo một cột nào đó, ví dụ nếu ta muốn sắp xếp theo tên của bài viết, và giới hạn số lượng hiển thị xuống còn 5 thì ta sẽ viết như sau:

```js
const colRef = collection(db, "posts");
// Log ra các documents
useEffect(() => {
  // Firestore queries
  const q = query(colRef, orderBy("title"), limit(5));
  onSnapshot(q, (snapshot) => {
    let posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(posts);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
```

- where(): Nhận vào 3 arguments là `("tên field","toán sử so sánh/điều kiện", "giá trị")`. Ví dụ mình muốn tìm các bài viết mà trong tiêu đề có chữ React thì mình sẽ viết như sau:

```js
const colRef = collection(db, "posts");

const q = query(colRef, where("author", "==", "Tran Dang Khoi"));
```

- Cập nhật tiếp sau...

# Firebase Authentication

- Firebase rất khỏe, nó còn hỗ trợ cho ta về authentication như các chức năng đăng ký, đăng nhập, đăng xuất rất ổn áp.

- onAuthStateChange: Check khi nào ta đăng nhập hay đăng xuất trong thời gian thực (real-time), khi đăng nhập thì hiển thị thông tin ngay lập tức, khi sign out thì ngược lại. Nó sẽ nhận vào 2 giá trị là `auth` và `user`

<hr/>

- Trước khi làm theo thì hãy copy đoạn code này vào component của bạn (hãy sắp xếp lại sao cho hợp lí để tiện code và không bị lỗi nhé):

```js
const [values, setValues] = useState({
  email: "",
  password: "",
});
const [userInfo, setUserInfo] = useState({});
const handleInputChange = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value,
  });
};
```

- Cách thức code chức năng đăng kí **(LƯU Ý: Mình sẽ code thôi còn công đoạn setup authentication, firestore thì mình sẽ không bàn tới ở đây)**:

  - B1: Nếu muốn đăng kí bằng Firebase thì trước hết ta phải sử dụng getAuth trong thư viện firebase/auth,chúng ta sẽ truyền auth vào trong app hiện tại của chúng ta bằng cách nhét app vào getAuth sau đó biến nó thành 1 biến rồi export nó ra để sử dụng ở các file khác

  ```js
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  ```

  - B2: Nếu muốn đăng kí = Firebase Authentication thì đương nhiên rồi, ta phải import chức năng đăng kí của nó vào (nó có tên là `createUserWithEmailAndPassword` và nằm trong thư viện `firebase/auth`)

  - B3: Ta tạo 1 form đơn giản có trường email, password và đương nhiên 1 button để khi click vào thì sẽ đăng nhập

  ```jsx
  /* Truyền vào form 1 function obSubmit là handleSignUp */
  const FirebaseForm = () => {
    return (
      <form onSubmit="{handleSignUp}">
        <input
          type="email"
          className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
          placeholder="Enter your email address"
          name="email"
          onChange="{handleInputChange}"
        />
        <input
          type="password"
          className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
          placeholder="Enter your password"
          name="password"
          onChange="{handleInputChange}"
        />
        <button
          type="submit"
          className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
        >
          Sign up
        </button>
      </form>
    );
  };
  ```

  B4: Sử dụng thư viện hoặc tự tạo một state để lưu giữ giá trị của form, ở đây mình ví dụ bằng cách sử dụng state `values` làm state lưu trữ giá trị form

  B5: Ok, giờ ta đã import thư viện, viết xong code JSX và sử dụng tailwindCSS để style rồi. Giờ cuối cùng chỉ còn là viết function handleSignUp để thực hiện chức năng đăng ký thôi:

  ```js
  // values: object chứa các dữ liệu của form gồm email và password (bật mí là tí nữa mình sẽ làm thêm có cả username và ảnh avatar)
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Khi tạo xong tài khoản = email và password thì lưu dữ liệu tài khoản vào biến user này
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // Thực hiện xong câu lệnh trên thì log ra dòng này để dev biết
      console.log("Registered user successfully");
    } catch (error) {
      // Nếu có lỗi thì log ra
      console.log(error);
    }
  };
  ```

  - B6: Tận hưởng thành quả thôi, ta hãy cùng mở Firebase lên và F5 lại, sau đó check trong phần Authentication xem tài khoản đã tồn tại chưa.

<hr/>

- Cách thức code hiển thị thông tin người dùng sua khi đăng kí/đăng nhập **(LƯU Ý: Mình sẽ code thôi còn công đoạn setup authentication, firestore thì mình sẽ không bàn tới ở đây)**:

  - B1: Đầu tiên ta tạo ra 1 state có chức năng lưu giữ thông tin của người dùng sau khi đăng kí/đăng nhập

  ```js
  const [userInfo, setUserInfo] = useState({});
  ```

  - B2: Ở function handleSignUp và handleSignIn ta thêm các dòng sau và các dòng này phải nằm ở dưới câu lệnh await đăng kí/đăng nhập, mình sẽ ví dụ = code đăng kí nha!

  ```js
  // values: object chứa các dữ liệu của form gồm email và password (bật mí là tí nữa mình sẽ làm thêm có cả username và ảnh avatar)
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Khi tạo xong tài khoản = email và password thì lưu dữ liệu tài khoản vào biến user này
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // Sử dụng function updateProfile có sẵn của firebase auth, giá trị thứ nhất truyền vào auth.currentUser, giá trị thứ hai truyền vào 1 object có displayName (username người dùng) và photoURL (avatar người dùng)
      await updateProfile(auth.currentUser, {
        displayName: values.username,
        photoURL:
          "https://images.unsplash.com/photo-1667202819845-44ecd08552b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      });
      console.log("Registered user successfully");
      // Sau khi đăng kí và updateProfile thành công thì add người dùng này vào collection users trong firestore database
      const userRef = collection(db, "users");
      addDoc(userRef, {
        username: values.username,
        email: values.email,
        password: values.password,
        id: user.user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  ```

  - B3: Muốn hiển thị ra thì đơn giản thôi, vì ta đã lưu giữ toàn bộ thông tin của người dùng trong một state là userInfo nên ta chỉ việc lấy thông tin từ đó ra

  ```jsx
  <div className="flex flex-col items-center mt-10 gap-x-5">
    {userInfo?.email && <div>{userInfo.email}</div>}
    {userInfo?.photoURL && (
      <img
        src={userInfo.photoURL}
        alt="Your avatar"
        className="w-20 h-20 rounded-full"
      />
    )}
    {userInfo?.displayName && <div>{userInfo.displayName}</div>}
    <button
      className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  </div>
  ```

  <hr/>

- Cách thức code chức năng đăng xuất **(LƯU Ý: Mình sẽ code thôi còn công đoạn setup authentication, firestore thì mình sẽ không bàn tới ở đây)**:

  - B1: Tạo 1 button có event onClick được truyền vào 1 function handleSignOut:

  ```js
  <button
    className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg"
    onClick={handleSignOut}
  >
    Sign out
  </button>
  ```

  - B2: Code function handleSignOut thui và mình nói thật mình chưa thấy chức năng sign out nào mà dễ như này:

  ```js
  const handleSignOut = () => {
    signOut(auth);
  };
  ```

  - B3: Để nhận biết được khi người dùng đăng xuất thì ta phải sử dụng thêm onAuthStateChanged như mình viết ở trên không thì chương trình sẽ lỗi ngay lập tức

  ```js
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
  }, []);
  ```

  - **Bình thường thì khi đăng kí/đăng nhập xong nó sẽ không cập nhật ngay nên trong function đăng kí/dăng nhập bạn phải setUserInfo 1 lần nữa để nó hiển thị đầy đủ thông tin**

<hr/>

- Cách thức code chức năng đăng nhập **(LƯU Ý: Mình sẽ code thôi còn công đoạn setup authentication, firestore thì mình sẽ không bàn tới ở đây)**:

  - B1: Để đăng nhập thì ta phải import `signInWithEmailAndPassword` từ `firebase/auth`.

  - B2: Tạo một form để đăng nhập, truyền vào 1 event onSubmit là handleSignIn và viết chức năng trong function đó

  ```jsx
  <div className="w-full mt-20 max-w-[500px] mx-auto bg-white shadow-lg p-5">
    <h2 className="text-center font-[30px] font-medium">Sign in form</h2>
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
        placeholder="Enter your email address"
        name="email"
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
        placeholder="Enter your password"
        name="password"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
      >
        Sign in
      </button>
    </form>
  </div>
  ```

  - B3: Code chức năng đăng nhập **(handleSignIn)**:

  ```js
  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    setUserInfo(user);
    console.log("Login successfully");
  };
  ```

# Class Component

Sở dĩ vì giờ ai cũng đã sử dụng Functional Component khi code React nên mình mới để cái Class Component ở tít bên dưới như này

Để tạo một class component trong React thì chúng ta thực hiện theo các bước dưới đây

1. Tạo một ES6 class cùng với tên file (khuyên dùng), kế thừa `React.Component`
2. Thêm một method là `render()` và return về một JSX
3. Nếu muốn dùng state trong Component thì phải tạo `constructor(props){...}`. Nhớ gọi `super(props)` để hoàn tất việc gọi contructor của class `React.Component`. **Nếu đã dùng constructor thì phải dùng super**. **Bạn không cần tạo constructor nếu bạn không khởi tạo state**.
4. Gán object cho `this.state`. Lưu ý là `this.state` chỉ có thể là object hoặc null !

`**Clock.jsx**`

```jsx
import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Current time: {this.state.time}.</h2>
      </div>
    );
  }
}
```

## setState

Để cập nhật lại UI thì ta chỉ cần gọi `this.setState()` lại là UI sẽ được cập nhật.

> Lưu ý là gọi `this.setState()` chứ không phải thay đổi `this.state={...}` đâu nha!

```jsx
import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  getTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Current time: {this.state.time}.</h2>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
```

Lưu ý khi gọi `setState()` là chúng ta phải truyền vào một **state mới**, nếu object bạn nested nhiều level thì state mới đó cũng nên có các object nested mới, như vậy UI có thể được cập nhật đúng.

Ví dụ

```jsx
import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
    };
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString(),
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Current time: {this.state.time.created}.</h2>
        <h3>Seconds: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
```

Ví dụ trên, mình chỉ muốn khi click button và chạy `getTime()` thì chỉ cập nhật lại `this.state.time.created` thôi, vậy nên

1. `newState !== this.state`
1. `newState.time !== this.state.time`, tức là cái `time mới` và `time cũ` khác nhau về mặt tham chiếu.

Giá trị `this.state.seconds` mình không cần cập nhật nên mình sẽ không cần làm mới cái `seconds` này, vì thế `newState.seconds === this.state.seconds`

## Lifecycle

Vòng đời của một component React sẽ được biểu diễn như hình dưới

![](./react-lifecycle.png)

Nhìn chung chúng ta sẽ có 3 giai đoạn của 1 vòng đời component

1. Giai đoạn khởi tạo: Mounting

2. Giai đoạn cập nhật: Updating

   - Giai đoạn này khi chúng ta thực hiện thay đổi `props`, gọi `setState()`, `forceUpdate()`
   - Hoặc đôi khi là component cha re-render làm component con re-render.

3. Giai đoạn huỷ: Unmounting

   - Giai đoạn này xảy ra ngay trước khi component bị huỷ

# Constructor trong class component

Cùng nhìn lại lifecycle trong React

![](./react-lifecycle.png)

**Nếu bạn không khởi tạo state hoặc không `bind` các method thì bạn không cần dùng constructor**

`constructor` là phương thức chạy đầu tiên khi component của chúng ta khởi tạo. Nó sẽ chạy trước khi component của chúng ta được mount.

> Mount ở đây nghĩa là đã render hết UI của React component lên DOM thật.

Để tạo một class component đúng chuẩn React thì chúng ta cần phải `extends React.Component`, vì ES6 class của bạn thôi là chưa đủ, bạn cần kế thừa từ `React.Component` React có thể hiểu được class của bạn là React class component.

Khi tạo constructor cho class component thì bạn phải gọi `super(props)` trước bất cứ câu lệnh nào. Nếu không thì `this.props` sẽ undefined trong contructor và gây nên bug.

Thường thì trong React constructor sẽ làm 2 nhiệm vụ chính

- Khởi tạo local state bằng cách gán object cho `this.state`
- Bind một method event handler với một instance (thường là this)

Bạn không nên gọi `setState()` trong `constructor()` để cập nhật lại UI.

```jsx
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

> Lưu ý:
> Tránh việc copy props vào state! Đây là lỗi khá phổ biến

```jsx
constructor(props) {
 super(props);
 // Don't do this!
 this.state = { color: props.color };
}
```

Điều này thực sự không cần thiết, bạn có thể sử dụng trực tiếp `this.props.color` luôn. Chưa hết, nếu làm như trên thì sẽ dẫn đến bug không mong muốn như là props `color` update nhưng state sẽ không update theo được.

Chỉ sử dụng pattern này khi mà bạn muốn bỏ qua việc props update thì color sẽ không update theo. Như vậy thì bạn nên đổi lại tên `color` thành `defaultColor` hoặc `initialColor`. Trong trường hợp muốn ép component reset initial state thì có thể thay đổi key của nó.

> **Những trường hợp mà không cần tạo state thì đừng tạo state làm gì, nó sẽ làm flow component của bạn bị rối**

# ComponentdidMount

`componentDidMount()` được chạy ngay khi component mounted. `componentDidMount()` thường được dùng để

- Truy cập đến DOM node, vì lúc này UI đã được render ra rồi
- Gọi API
- `setState()`

# componentDidUpdate

`componentDidUpdate` sẽ được gọi ngay lập tức khi component của bạn re-render và cập nhật lại DOM thật. Phương thức này không chạy ở lần render đầu tiên.

Chúng ta dùng `componentDidUpdate` khi

- Muốn track sự thay đổi trên state thì sẽ thực hiện 1 hành động gì đó, ví dụ truy cập đến DOM thật
- Track sự thay đổi url
- Bạn cũng có thể gọi API và setState trong này nhưng hãy cẩn thận đặt điều kiện vào trong, còn không thì sẽ dễ dấn đến vòng lặp vô hạn.

# componentWillUnmount

`componentWillUnmount` sẽ được chạy ngay trước khi component bị unmount và huỷ. Ví dụ API của bạn chưa trả về dữ liệu nhưng bạn đã chuyển sang trang khác thì lúc đó React sẽ phải thực hiện unmount component

Chúng ta dùng `componentWillUnmount` khi muốn

- clean một thứ gì đó như `setTimeout` hay `setInterval`
- Huỷ gọi api, huỷ subscription nào đó đã được tạo ở `componentDidMount`

Bạn không nên `setState` trong `componentWillUnmount` vì component sẽ không bao giờ re-render lại.

## Inheritance

Bạn có thể dùng kế thừa bên giống như đang lập trình hướng đối tượng để kế thừa lại những method của component khác.

Ví dụ dưới đây:

- Component `Button` có method là `handleClick`
- Chúng ta muốn component `Button` này render ra nội dung hơi khác 1 tí nhưng vẫn giữ nguyên logic của method `handleClick`
- Và thế là ta tạo `YellowButton` kế thừa `Button`.

```jsx
import React, { Component } from "react";

class Button extends Component {
  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        Button
      </button>
    );
  }
}

class YellowButton extends Button {
  render() {
    return (
      <button className="btn btn-yellow" onClick={this.handleClick}>
        Yellow Button
      </button>
    );
  }
}

export class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <YellowButton />
      </div>
    );
  }
}

export default Inheritance;
```

Cách này cũng được, nhưng không hay! React không muốn bạn sử dụng React như thế này

- React muốn bạn dùng composition thay cho inheritance
- Kiến trúc React được thế kế để bạn code theo Composition
- Composition giúp code của bạn có tính tái sử dụng cao hơn

## Composition

Composition là cách mà chúng ta dùng prop như các giá trị nguyên thuỷ, object, React element hay function để tăng tính tái sử dụng cho component chúng ta.

Ví dụ dưới đây sẽ cho bạn thấy chúng ta không cần tạo thêm component mới nhưng vẫn đảm bảo việc render ra UI như ý.

```jsx
import React, { Component } from "react";

class Button extends Component {
  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.handleClick}
      >
        {this.props.name} Button
      </button>
    );
  }
}

class Layout extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="layout">
        <div className="layout-left">{left}</div>
        <div className="layout-right">{right}</div>
      </div>
    );
  }
}

export class Composition extends Component {
  render() {
    return (
      <div>
        Composition
        <Button name="Yellow" className="btn-yellow" />
        <Layout
          left={<Button name="Green" className="btn-green" />}
          right={<Button name="Red" className="btn-red" />}
        />
      </div>
    );
  }
}

export default Composition;
```

> Tại Facebook, họ đã sử dụng hàng ngàn component React, họ chưa bao giờ gặp trường hợp nào phải dùng đến inheritance component.

Nếu bạn muốn sử dụng lại những function không liên quan đến UI giữa các component với nhau, bạn có thể đưa nó ra thành một function riêng như kiểu Javascript module. Sau đó bạn có thể import vào component nào bạn muốn dùng, đừng kế thừa làm gì cho mệt.
