import React, {FC, useEffect, useState} from 'react';
import './UserList.css';
import Button from "../Button/Button";
import UserItem from "../UserItem/UserItem";
import NoUsersText from "../NoUsersText/NoUsersText";
import {IUser} from "../../data/interfaces";

interface Props {
    onSetUserDetailCallback: (id: number | string) => void;
    users: IUser[];
}

const UserList: FC<Props> = ({users}) => {

    const [isAll, setIsAll] = useState<boolean>(false);

    return (
        <div className="user-list">

            {
                users && users.length > 0 && isAll ?
                    <div className="users">
                        {users.map((el: any, idx: number) => <UserItem key={idx} user={el}></UserItem>)}
                    </div>
                    :
                    users && users.length > 0 && !isAll ?
                        <div className="users">
                            {(users.slice(0, 3)).map((el: any, idx: number) => <UserItem key={idx} user={el}></UserItem>)}
                        </div>
                        :
                        <NoUsersText text="There are no users"/>
            }

            <Button
                onClickCallback={() => setIsAll(!isAll)}
                text={isAll ? 'Collapse all' : 'View all'}
                typeOfWidth={'full'}
            />
        </div>
    );
}

export default UserList;
