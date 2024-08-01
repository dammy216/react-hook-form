import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; password: string }>({
    mode: "onChange",
  });

  return (
    <div className="form-container">
      <h1>フォーム</h1>
      <form
        action=""
        onSubmit={handleSubmit(
          (data: { name: string; email: string; password: string }) =>
            console.log(data)
        )}
      >
        <label htmlFor="名前">名前</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "名前を入力してください",
            minLength: {
              value: 3,
              message: "3文字以上の名前を入力してください",
            },
          })}
        />
        <p>{errors.name?.message as string}</p>
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "メールアドレスを入力してください",
          })}
        />
        <p>{errors.email?.message as string}</p>
        <label htmlFor="パスワード">パスワード</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "パスワードを入力してください",
            minLength: {
              value: 6,
              message: "6文字以上のパスワードを入力してください",
            },
          })}
        />
        <p>{errors.password?.message as string}</p>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
