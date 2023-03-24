import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AccountContext from "../../context/AccountContext";
import styles from "../../style";
import AdminHeader from "./AdminHeader";
import AdminNavbar from "./AdminNavbar";
import CRUD from "./CRUD";

const AdminPage = () => {
  const { session, fetched, gotoLogin } = useContext(AccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (fetched) {
      if (!session || session.user.type !== "ADMIN") {
        toast.error("Admin privilege required.");
        gotoLogin(true);
      }
    }
  }, [session, fetched]);

  return (
    <iframe
      src="http://localhost:5555/"
      title="description"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 999999,
      }}
    ></iframe>
  );

  return (
    <div>
      <div className="bg-[#dbf1fe] w-full overflow-hidden">
        <div className="bg-[#eff6ff] w-full overflow-hidden">
          <div className={styles.paddingX}>
            <div className={styles.flexStart}>
              <div className={styles.boxWidth}>
                <AdminHeader />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] border-b border-t w-full overflow-hidden">
          <div className={styles.paddingX}>
            <div className={styles.flexCenter}>
              <div className={styles.boxWidth}>
                <AdminNavbar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CRUD />
    </div>
  );
};

export default AdminPage;
