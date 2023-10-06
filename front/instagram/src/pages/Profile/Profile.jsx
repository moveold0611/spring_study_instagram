import React from 'react';
/** @jsxImportSource @emotion/react */
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import RootContainer from '../../components/Containers/RootContainer/RootContainer';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileBody from '../../components/Profile/ProfileBody/ProfileBody';

function Profile(props) {
    return (
        <RootContainer>
            <ProfileLayout>
                <ProfileHeader />
                <ProfileBody />
            </ProfileLayout>
        </RootContainer>
    );
}

export default Profile;