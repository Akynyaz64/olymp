import React, { useState } from "react";

const UserContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [info, setInfo] = useState({
        id: "",
        name: "",
        surname: "",
        fathername: "",
        birth_date: "",
        country_id: "",
        status: "",
        phone: "",
        email: "",
    });

    const updateInfo = (val) => {
        setInfo(val);
    };

    return (
        <UserContext.Provider
            value={{
                data: { info },
                updateInfo,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;
