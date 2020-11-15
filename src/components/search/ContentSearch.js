import React, { useEffect, useState } from "react";
import { Input, Row, Col, List, Card, Button } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { searchResult } from "../../store/actions/searchAction";

const { Search } = Input;

const ContentSearch = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [planetResult, setPlanetResult] = useState(null);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [noResult, setNoResult] = useState("Loading...");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.search);

  let loadMore = loadMoreBtn && <Button>loading more</Button>;

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchResult(searchWord));
      setNoResult("Loading...");
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchWord]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchWord.length > 0 && data.searchData.length === 0) {
        setNoResult("No Result");
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchWord, data]);

  const onSearch = (e) => setSearchWord(e.target.value);
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="input search text"
            onChange={(e) => onSearch(e)}
            enterButton
            size="large"
          />
        </Col>
      </Row>
      <div style={{ paddingTop: "20px" }}>
        {data.searchData.length > 0 ? (
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
        ) : (
          <div>
            {searchWord.length > 0 && data.searchData.length === 0
              ? noResult
              : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentSearch;
