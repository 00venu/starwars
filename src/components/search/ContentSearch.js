import React, { useEffect, useState, useCallback } from "react";
import { Input, Row, Col, List, Card, Button } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { searchResult, loadMoreAction } from "../../store/actions/searchAction";

import { getnewData } from './contentSearchService'
import './contentSearch.css';

const { Search } = Input;

const ContentSearch = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [noResult, setNoResult] = useState("Loading...");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.search);

  const loadMoreFun = () => {
    dispatch(loadMoreAction(data.next))
  }

  let loadMore = data.next !== null && (
    <Button type="primary" onClick={loadMoreFun}>loading more</Button>
  );

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
    // console.log(data.searchData)

    return () => clearTimeout(delayDebounceFn);
  }, [searchWord, data]);

  useEffect(() => {
    console.log(getnewData(data.searchData))
  }, [data.searchData])

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
              xl: 5,
            }}
            loadMore={loadMore}
            dataSource={data.searchData}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.name} className='card-header' headStyle={{ fontSize: item.fontSize }}  >
                  <h3 className='head-pop'>Population</h3>
                  <span ><UsergroupAddOutlined className='userGroup-icon' />{item.population}</span>
                </Card>
              </List.Item>
            )}
          />
        ) : (
            <div className='loading-txt'>
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
