FROM python:3.9.7
WORKDIR /code
COPY ./requirements.txt ./
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY . .