import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface user {
  name: string;
  email: string;
}

export type AppProviderType = {
  user: user;
  setUser: Dispatch<SetStateAction<user>>;
  Login: (user: user) => void;
};

const AppContext = createContext<AppProviderType | undefined>(undefined);

function AppProvider({ children }) {
  const [user, setUser] = useState<user>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null,
  );

  if (!AppContext) {
    throw new Error("useApp must be used within a AppProvider");
  }
  const Login = (user: user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const context: AppProviderType = { user, setUser, Login };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppProvider };
