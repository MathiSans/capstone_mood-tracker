import Image from "next/image";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

export default function FriendsListTile({
  isLoadingEntries,
  setSearchValue,
  handleFriendsAddClick,
  focusInput,
  friendsList,
}) {
  const [friendsListName, setFriendsListName] =
    useLocalStorageState("The Moodies");
  console.log("friendsList", friendsList);
  const [editValue, setEditValue] = useState(friendsListName);

  const [showEditForm, setShowEditForm] = useState(false);

  const handleInputChange = (event) => {
    setEditValue(event.target.value);
  };
  const handleEdit = () => {
    setFriendsListName(editValue);
    setShowEditForm(false);
  };

  return (
    <FriendListContainer>
      <h2>Friends List</h2>
      <p>{friendsListName}</p>
      <div>
        {showEditForm && (
          <div>
            <input
              type="text"
              value={editValue}
              onChange={handleInputChange}
            ></input>
            <button
              type="button"
              onClick={() => {
                handleEdit();
                focusInput();
              }}
            >
              edit
            </button>
          </div>
        )}
        {!showEditForm && (
          <>
            <FaEdit
              onClick={() => {
                setShowEditForm(!showEditForm);
              }}
            />
          </>
        )}
      </div>
      <ScrollContainer>
        <FriendsContainer>
          {!isLoadingEntries &&
            friendsList &&
            friendsList.map(({ _id, image, name }) => {
              return (
                <FriendsCard
                  key={_id}
                  onClick={() => {
                    setSearchValue(name);
                  }}
                >
                  <DeleteDiv>
                    <TiDeleteOutline
                      onClick={() => {
                        alert("delete friend");
                      }}
                    />
                  </DeleteDiv>

                  <Image
                    width={35}
                    height={35}
                    src={image}
                    alt={`image of ${name}`}
                  />
                  <p>{name}</p>
                </FriendsCard>
              );
            })}
          <FriendsCard>
            <FaPlusCircle
              onClick={() => {
                handleFriendsAddClick(_id);
              }}
            />
          </FriendsCard>
        </FriendsContainer>
      </ScrollContainer>
    </FriendListContainer>
  );
}

export const FriendsCard = styled.div`
  padding: 0.7rem;
  cursor: pointer;
  position: relative;
`;
export const FriendListContainer = styled.div`
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  grid-column-end: span 4;
  grid-row-end: span 3;
`;
export const FriendsContainer = styled.div`
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  grid-column-end: span 4;
  grid-row-end: span 5;
  margin-top: 1rem;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  overflow-x: scroll;
`;

const DeleteDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 101;
`;
