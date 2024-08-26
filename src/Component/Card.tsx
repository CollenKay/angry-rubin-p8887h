import React from "react";

interface CardProps {
  title: string;
  value: string | number; // You can adjust the type based on your needs
}

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h2 className="card-text">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
