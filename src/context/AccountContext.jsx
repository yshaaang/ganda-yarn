import axios from "axios";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SESSION_KEY = "session_id";

const AccountContext = createContext({
  session: {},
  login: () => {},
  logout: () => {},
  register: () => {},
  gotoLogin: () => {},
  fetched: false,
});

export const AccountProvider = ({ children }) => {
  const [session, setSession] = useState();
  const navigate = useNavigate();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);

    if (session) {
      setSession(JSON.parse(session));
    }

    setFetched(true);

    return () => {
      setFetched(false);
    };
  }, []);

  // Set Session Header
  useLayoutEffect(() => {
    if (session) {
      axios.defaults.headers[SESSION_KEY] = session.id;
    } else {
      delete axios.defaults.headers[SESSION_KEY];
    }
  }, [session]);

  // Save Session to LocalStorage on change
  useEffect(() => {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [session]);

  const login = async (username, password) => {
    const response = await axios.get(
      `https://localhost:7206/api/User/${username}&${password}`
    );

    setFetched(true);
    console.log({ response });

    if (response.data) {
      axios.defaults.headers[SESSION_KEY] = response.data.id;

      setSession(response.data);
      const params = new URLSearchParams(window.location.search);
      const next = params.get("next");

      if (next) {
        window.location.href = decodeURIComponent(next);
      } else {
        window.location.href = "/";
      }
      // navigate("/");
    }

    return response.data;
  };

  const logout = async () => {
    if (!session) {
      return;
    }

    // await axios.post("user/logout");

    setSession(null);
    localStorage.removeItem(SESSION_KEY);
    navigate("/");
  };

  const register = async (
    firstName,
    lastName,
    gender,
    mobileNumber,
    homeAddress,
    emailAddress,
    username,
    password
  ) => {
    const response = await axios.post(`https://localhost:7206/api/User`, {
      firstName,
      lastName,
      gender,
      mobileNumber,
      homeAddress,
      emailAddress,
      username,
      password,
    });

    setFetched(true);
    console.log({ response });

    if (response.data) {
      axios.defaults.headers["session_id"] = response.data.id;

      setSession(response.data);
      navigate("/");
    }

    return response.data;
  };

  const gotoLogin = (saveNext = false) => {
    if (saveNext) {
      navigate(`/login?next=${encodeURI(window.location.href)}`);
    } else {
      navigate(`/login`);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        session,
        login,
        register,
        gotoLogin,
        logout,
        fetched,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
