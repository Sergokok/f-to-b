import React from 'react';
import './Profile.css';

const Profile = ({onEditProfile, isEditProfile, onFormSubmit}) => {

    function Button() {
        if (isEditProfile === true) {
            return (<button
                className='profile__button profile__button-submit'
                type={'submit'}>
                Сохранить
            </button>)
        } else {
            return (
                <button
                    className='profile__button profile__button-edit'
                    type={'button'}
                    onClick={onEditProfile}>
                    Редактировать
                </button>)
        }
    }

    return (
        <section className='profile'>
            <form className='profile__form'
                  name='profile-form'
                  onSubmit={onFormSubmit}
                  noValidate={true}>
                <h2 className='profile__title'>Привет, Андрей!</h2>
                <div className='profile__fieldset'>
                    <label className='profile__label'>Имя
                        <input
                            className='profile__input'
                            type={'text'}
                            name={'name'}
                            placeholder='Имя'
                            minLength={2}
                            maxLength={30}
                            required={true}
                        />
                    </label>
                    <label className='profile__label'>E-mail
                        <input
                            className='profile__input'
                            type='email'
                            name='email'
                            placeholder='pochta@yandex.ru'
                            minLength={2}
                            maxLength={30}
                            required={true}
                        />
                    </label>
                </div>
                <Button />
                <button className='profile__button profile__button-exit'>Выйти из аккаунта</button>
            </form>
        </section>
    )
}

export default Profile;
