import React, {FC} from 'react';
import './UserInfo.css';
import {useDispatch, useSelector} from "react-redux";
import {setActiveUser} from "../../store/slice/UsersReducer";
import Button from "../Button/Button";
import {images} from "../../data/images";
import {IUser} from "../../data/interfaces";

interface Props {
    user: IUser | null;
}

const UserInfo: FC<Props> = ({user}) => {
    // @ts-ignore
    const {activeUser} = useSelector(state => state.users);

    const dispatch = useDispatch();

    return (
        <div className="user-info">
            {user &&
              <div>
                  <div className="title">
                    <div
                      className="cross"
                      onClick={() => dispatch(setActiveUser(-1))}
                    >
                      X
                    </div>
                  </div>

                    <div className="img-wrapper">
                    <img src={images[+user?.id]} alt=""/>
                    </div>

                <div className="info">
                <div className="name">{activeUser?.name}</div>
                <div className="position">{activeUser?.position}</div>
                </div>

                <table>
                    <tbody>
                    <tr>
                    <td>Phone</td>
                    <td>{activeUser?.phone}</td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td>{activeUser?.email}</td>
                    </tr>
                    </tbody>
                </table>
            <Button text={'Send message'} typeOfWidth={'full'} onClickCallback={() => { console.log('Send message btn click') }}/>
              </div>
            }
        </div>
    );
}

export default UserInfo;
