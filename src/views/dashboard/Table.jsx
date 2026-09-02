'use client';
// MUI Imports
import Card from '@mui/material/Card';

// Wijmo imports
import {
  FlexGrid,
  FlexGridColumn,
  FlexGridCellTemplate,
} from '@mescius/wijmo.react.grid';
import { CellMaker } from '@mescius/wijmo.grid.cellmaker';

//
import useEvent from 'react-use-event-hook';
import React, { useRef, useState } from 'react';

// Vars
const rowsData = [
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson ',
    username: '@amiccoo',
    email: 'Jacinthe_Blick@hotmail.com',
    iconClass: 'text-primary',
    roleIcon: '/images/icons/crown.png',
    role: '관리자',
    status: 'pending',
  },
  {
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    username: '@brossiter15',
    email: 'Jaylon_Bartell3@gmail.com',
    iconClass: 'text-warning',
    roleIcon: '/images/icons/edit.png',
    role: '편집자',
    status: 'active',
  },
  {
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    username: '@jsbemblinf',
    email: 'Tristin_Johnson@gmail.com',
    iconClass: 'text-error',
    roleIcon: '/images/icons/computer.png',
    role: '작성자',
    status: 'active',
  },
  {
    avatarSrc: '/images/avatars/4.png',
    name: 'Mr. Justin Richardson',
    username: '@justin45',
    email: 'Toney21@yahoo.com',
    iconClass: 'text-warning',
    roleIcon: '/images/icons/edit.png',
    role: '편집자',
    status: 'pending',
  },
  {
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    username: '@tannernic',
    email: 'Hunter_Kuhic68@hotmail.com',
    iconClass: 'text-info',
    roleIcon: '/images/icons/pie-chart.png',
    role: '유지 관리자',
    status: 'active',
  },
  {
    avatarSrc: '/images/avatars/6.png',
    name: 'Crystal Mays',
    username: '@crystal99',
    email: 'Norene_Bins@yahoo.com',
    iconClass: 'text-warning',
    roleIcon: '/images/icons/edit.png',
    role: '편집자',
    status: 'pending',
  },
  {
    avatarSrc: '/images/avatars/7.png',
    name: 'Mary Garcia',
    username: '@marygarcia4',
    email: 'Emmitt.Walker14@hotmail.com',
    iconClass: 'text-info',
    roleIcon: '/images/icons/pie-chart.png',
    role: '유지 관리자',
    status: 'inactive',
  },
  {
    avatarSrc: '/images/avatars/8.png',
    name: 'Megan Roberts',
    username: '@megan78',
    email: 'Patrick.Howe73@gmail.com',
    iconClass: 'text-success',
    roleIcon: '/images/icons/person.png',
    role: '구독자',
    status: 'active',
  },
];

const Table = () => {
  const flexRef = React.useRef(null);
  const flexInitialized = useEvent((flexgrid) => {
    flexRef.current = flexgrid;

    // 스크롤 가능한 영역에 행의 높이 설정
    flexgrid.rows.defaultSize = 60;
    // 열 헤더 영역에 행의 높이 설정
    flexgrid.columnHeaders.rows.defaultSize = 60;
    flexgrid.columns[1].header = '';

    flexgrid.select(-1, -1);
  });

  return (
    <Card>
      {/* <div className='overflow-x-auto'> */}
      <FlexGrid
        headersVisibility="Column"
        alternatingRowStep={0}
        isReadOnly={true}
        initialized={flexInitialized}
        itemsSource={rowsData}
      >
        <FlexGridColumn
          header="성명"
          binding="avatarSrc"
          cssClass="img-column"
          align="right"
          width={60}
          cellTemplate={CellMaker.makeImage({})}
        />
        <FlexGridColumn header="name" binding=" " width="*">
          <FlexGridCellTemplate
            cellType="Cell"
            template={(context) => {
              return (
                <React.Fragment>
                  {context.item.name}
                  <br />
                  <span className="username-text">{context.item.username}</span>
                </React.Fragment>
              );
            }}
          />
        </FlexGridColumn>

        <FlexGridColumn header="이메일" binding="email" width="*" />
        <FlexGridColumn header="권한" binding="role" width="*">
          <FlexGridCellTemplate
            cellType="Cell"
            template={(context) => {
              return (
                <React.Fragment>
                  <img src={context.item.roleIcon} className="table-icons" />{' '}
                  {context.item.role}
                </React.Fragment>
              );
            }}
          />
        </FlexGridColumn>
        <FlexGridColumn
          header="상태"
          binding="status"
          cssClass="status-column"
          width="*"
        >
          <FlexGridCellTemplate
            cellType="Cell"
            template={(context) => {
              const { status } = context.item; // context에서 paymentStatus 가져오기
              let badgeClass = '';
              let badgeText = '';

              // // paymentStatus에 따라 배지 스타일과 텍스트 설정
              if (status === 'pending') {
                badgeClass = 'badge bg-pending';
                badgeText = 'Pending';
              } else if (status === 'inactive') {
                badgeClass = 'badge bg-inactive';

                badgeText = 'Inactive';
              } else {
                badgeClass = 'badge bg-active';
                badgeText = 'Active';
              }

              // // 조건에 맞는 배지 렌더링
              return badgeText ? (
                <span className={`inline-block text-center ${badgeClass}`}>
                  {badgeText}
                </span>
              ) : null;
            }}
          />
        </FlexGridColumn>
      </FlexGrid>
      {/* </div> */}
    </Card>
  );
};

export default Table;
