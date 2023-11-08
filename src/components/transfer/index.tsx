/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from "react";
import "./style.css";
import { Button, Checkbox, Divider } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CheckboxGroup = Checkbox.Group;

const defaultLeftOptions = [
  { label: "content1", value: "1" },
  { label: "content2", value: "2" },
  { label: "content3", value: "3" },
  { label: "content4", value: "4" },
  { label: "content5", value: "5" },
];

const defaultRightOptions = [
  { label: "content6", value: "6" },
  { label: "content7", value: "7" },
  { label: "content8", value: "8" },
  { label: "content9", value: "9" },
  { label: "content10", value: "10" },
];

function Transfer() {
  const [checkedListLeft, setCheckedListLeft] = useState<CheckboxValueType[]>(
    []
  );
  const [checkedListRight, setCheckedListRight] = useState<CheckboxValueType[]>(
    []
  );

  const [leftOptions, setLeftOptions] = useState(defaultLeftOptions);
  const [rightOptions, setRightOptions] = useState(defaultRightOptions);

  const checkAllLeft = leftOptions.length === checkedListLeft.length;
  const checkAllRight = rightOptions.length === checkedListRight.length;

  //[FUNCTION]:
  const onCheckAllChangeLeft = (e: CheckboxChangeEvent) => {
    setCheckedListLeft(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      e.target.checked ? leftOptions?.map((item: any) => item.value) : []
    );
  };

  const onCheckAllChangeRight = (e: CheckboxChangeEvent) => {
    setCheckedListRight(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      e.target.checked ? rightOptions?.map((item: any) => item.value) : []
    );
  };

  const handleChange = (list: CheckboxValueType[], type: string) => {
    if (type === "right") {
      setCheckedListRight(list);
    }
  };

  const handleChangeCheckBoxLeft = (value: any) => {
    const cloneCheckedListLeft = [...checkedListLeft];
    setCheckedListLeft([...cloneCheckedListLeft, value]);
  };

  const handleTransferLeftToRight = () => {
    const list: any = [];
    checkedListLeft.forEach((item: any) => {
      const index = leftOptions.findIndex((res: any) => res.value === item);

      if (index !== -1) {
        list.push(leftOptions[index]);
      }
    });

    const newRightOption = [...list, ...rightOptions];
    const newLeftOption = leftOptions.filter(
      (item: any) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        !checkedListLeft.includes(item.value)
    );

    setRightOptions(newRightOption);
    setLeftOptions(newLeftOption);
    setCheckedListLeft([]);
  };

  const handleTransferRightToLeft = () => {
    const listRightOption = rightOptions.filter((item: any) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      checkedListRight.includes(item.value)
    );

    const newLeftOption = [...leftOptions, ...listRightOption]?.sort(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (a: any, b: any) => a.value - b.value
    );

    const newRightOption = rightOptions.filter(
      (item: any) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        !checkedListRight.includes(item.value)
    );

    setRightOptions(newRightOption);
    setLeftOptions(newLeftOption);
    setCheckedListRight([]);
  };

  return (
    <div className="container">
      <div className="box-list">
        <div className="box-list-head">
          <Checkbox
            // indeterminate={indeterminate}
            onChange={onCheckAllChangeLeft}
            checked={checkAllLeft}
          >
            Check all
          </Checkbox>
          <span>
            {checkedListLeft?.length || 0}/{leftOptions?.length} items
          </span>
        </div>

        <Divider
          style={{
            margin: "5px",
          }}
        />

        <div className="box-list-body">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {leftOptions?.map((item: any, index: number) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
              <Checkbox
                onChange={() => handleChangeCheckBoxLeft(item.value)}
                key={index}
                checked={checkedListLeft.includes(item.value)}
              >
                {item.label}
              </Checkbox>
            ))}
          </div>

        </div>
      </div>

      <div className="btn-list">
        <Button
          onClick={handleTransferLeftToRight}
          disabled={checkedListLeft?.length === 0}
          className="btn"
        >
          <RightOutlined />
        </Button>

        <Button
          onClick={handleTransferRightToLeft}
          disabled={checkedListRight?.length === 0}
          className="btn"
        >
          <LeftOutlined />
        </Button>
      </div>

      <div className="box-list">
        <div className="box-list-head">
          <Checkbox
            // indeterminate={indeterminate}
            onChange={onCheckAllChangeRight}
            checked={checkAllRight}
          >
            Check all
          </Checkbox>

          <span>
            {checkedListRight?.length || 0}/{rightOptions?.length} items
          </span>
        </div>

        <Divider
          style={{
            margin: "5px",
          }}
        />

        <div className="box-list-body">
          <CheckboxGroup
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            options={rightOptions}
            value={checkedListRight}
            onChange={(list: CheckboxValueType[]) =>
              handleChange(list, "right")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Transfer;
