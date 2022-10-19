FROM python:3.7
WORKDIR /module
RUN echo "creating fastapi...."
COPY ./requirements.txt /module/requirements.txt
RUN pip install --no-cache-dir -r /module/requirements.txt
COPY . /module
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]