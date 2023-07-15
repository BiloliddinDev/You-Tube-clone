import image from "../../Image/Logo.png";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Select, Button } from "antd";
const { Search } = Input;
import { useState } from "react";

const Nav = () => {
  const onSearch = (value: string) => console.log(value);
  const handleChange = (value: string) => console.log(value);
  const [mode, setMode] = useState(true);
  return (
    <div className="fixed top-0 left-0 w-full bg-bgBlask py-[16px] shadow">
      <div className="flex items-center gap-1 container justify-between">
        <div className="flex items-center gap-2">
          <img width={50} height={50} src={image} alt="" />
          <h1 className="text-white text-[24px] font-bold">
            You<span>Tube</span>
          </h1>
        </div>
        <Search
          size="large"
          style={{
            width: "400px",
            backgroundColor: "#090d22",
            borderRadius: "12px",
          }}
          placeholder="Input Search Text"
          onSearch={onSearch}
          enterButton
        />
        <div className="flex items-center gap-3">
          <Select
            defaultValue="Uzb"
            style={{ width: 80 }}
            onChange={handleChange}
            options={[
              { value: "Uzb", label: "Uzb" },
              { value: "Ru", label: "Ru" },
              { value: "Eng", label: "Eng" },
            ]}
          />
          <Button onClick={() => setMode(!mode)}>
            {mode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
