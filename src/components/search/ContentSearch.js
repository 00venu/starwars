import React, { useEffect, useState } from "react";
import { Input, Row, Col, List, Card, Button } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { searchResult } from "../../store/actions/searchAction";

const { Search } = Input;

const ContentSearch = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [planetResult, setPlanetResult] = useState(null);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.search);

  let loadMore = loadMoreBtn && <Button>loading more</Button>;
  useEffect(() => {
    dispatch(searchResult(searchWord));
  }, [searchWord]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSearch = (e) => setSearchWord(e.target.value);
  const onSearchFun = (value) => setSearchWord(value);

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="input search text"
            onChange={(e) => onSearch(e)}
            onSearch={onSearchFun}
            enterButton
            size="large"
          />
        </Col>
      </Row>
      <div style={{ paddingTop: "20px" }}>
        {data.searchData.length > 0 && (
          <List
            grid={{
              gutter: 16,
              xl: 4,
            }}
            loadMore={loadMore}
            dataSource={data.searchData}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.name}>
                  <h3>Population</h3>
                  <span>{item.population}</span>
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ContentSearch;
