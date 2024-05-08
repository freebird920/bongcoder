Hi. Bong-Coders.

It's time to practice Next.js


# 개발환경 세팅

### VS code 설치
vscode를 설치한다.
[다운로드링크](https://code.visualstudio.com/)
### node.js
node.js를 설치한다.
[다운로드링크](https://nodejs.org/en)
### next.js 설치
1. vscode에서
1. <kbd>ctrl</kbd> + <kbd>`</kbd>
1. 터미널에 npx create-next-app@latest 입력

# how to route?


1. ./src/app/ 아래에 적절한 이름의 폴더를 만든다.
2. ./src/app/[새로운폴더이름]
3. ./src/app/[새로운폴더이름]/page.tsx
4. page.js, page.jsx page.tsx 파일을 만든다.

# hello라는 페이지를 만들어보자.

1. ./src/app/hello/page.tsx 만들기.
2. nav bar를 만들어서 home과 hello 페이지를 오갈 수 있도록 한다.
3. hello 페이지에 const로 name, age, introduce 라는 변수에 적절한 문자열을 저장한다.
4. 저장한 문자열을 적절히 보여준다.

# tips.

## tailwind 때문에 globals.css에 뜨는 거슬리는 경우

./vscode/settings.json을 만들고 아래를 복붙 후 저장

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## css, tailwind에서 class 만드는 법

### global.css

```css
@layer components {
  .li-navbar {
    /*.[클래스명]으로 작명한다.*/
    @apply font-bold text-lg hover:bg-green-500; /*@apply를 이용하면 tailwind의 calssname을 그대로 사용 가능하다. */
    background-color: blue; /*일반 css 는 이렇게 쓰면 된다.*/
  }
}
```

### somecomponent.tsx

```tsx
return (
  <li className="li-navbar">
    <a href="/">Home</a>
  </li>
);
```
