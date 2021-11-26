
import pydantic as pydantic


class UserBase(pydantic.BaseModel):
    email: str


class UserCreate(UserBase):
    hashed_password: str

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
