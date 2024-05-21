import React from 'react';
import Popup from 'reactjs-popup';

const closeButtonStyle = {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '50px',
    height: '50px',
    background: '#ff3366',
    color: '#fff',
    fontSize: '4rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50%', // Use border-radius to make it round
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default () => (
    <Popup modal open position="right center" closeOnDocumentClick>
        {close => (
            <div>
                <button style={closeButtonStyle} onClick={close}>
                    &times;
                </button>
                <>
                    <img
                        src="/Home_Images/addmition_open2023.jpg"
                        alt="Home_Image"
                        style={{ width: '60vh', height: '80vh', objectFit: 'cover', cursor: 'pointer' }}
                        // onClick={() => window.location.href = '#'}
                    />
                </>
            </div>
        )}
    </Popup>
);
