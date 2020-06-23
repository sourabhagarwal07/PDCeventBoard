import React, {useState, useEffect} from 'react';
import {List, Avatar, Space, Button, Menu, Dropdown} from 'antd';
import {MoreOutlined, LikeOutlined, StarOutlined, DownOutlined} from '@ant-design/icons';
import useReactRouter from 'use-react-router';
import "./index.less";
// import CreateProject from "../CreateProject";


const ProjectList = (props) => {
    const [project, setProject] = useState([]);
    const [visible, setVisible] = useState(false);
    const [href, setHref] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [filterValue, setFilterValue] = useState("Ongoing");
    const projectId = 1;
    const {history, location, match} = useReactRouter();



    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: href,
            title: title,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: description,
            content: content,
        });
    }

    const IconText = ({icon, text}) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const onClick = ({key}) => {
        setFilterValue(key);
    };

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="Ongoing">Ongoing</Menu.Item>
            <Menu.Item key="Completed">Completed</Menu.Item>
            <Menu.Item key="Coming Soon">Coming Soon</Menu.Item>
        </Menu>
    );

    return (
        <div style={{background: '#fff'}}>
            {/*<CreateProject visible={visible} setVisible={setVisible}/>*/}
            <List
                header={
                    <div className="project-list-btn-container">
                        <h2>Project List</h2>
                        <Button
                            className="project-list-new-btn"
                            type="primary"
                            onClick={() => setVisible(true)}
                        >
                            Create a new project
                        </Button>
                        <Dropdown className="project-list-menu" overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {filterValue}<DownOutlined/>
                            </a>
                        </Dropdown>
                    </div>
                }
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 11,
                }}
                dataSource={listData}
                footer={
                    <div>
                        Provided By PDC
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                            <Button type="link" onClick={() => {
                                // history.push('/projectinfo')
                            }} icon={<MoreOutlined/>}>More</Button>
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar}/>}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ProjectList;