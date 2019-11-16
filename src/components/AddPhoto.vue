<style>
  .img-container {
    width: 100%;
    margin-top: 30px;
  }
  #fileInput {
      display: none;
  }
</style>

<template>
    <div class="img-container">
        <image-uploader
            :preview="true"
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            capture="environment"
            :debug="1"
            doNotResize="gif"
            :autoRotate="true"
            outputFormat="verbose"
            @input="setImage">
    <label for="fileInput" slot="upload-label">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            class="path1"
            d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
          ></path>
        </svg>
      </figure>
      <span class="upload-caption">{{
        hasImage ? "Replace" : "Click to upload"
      }}</span>
    </label>
      </image-uploader>  
    </div>
</template>

<script>
window.photosList = [];

export default {
    name: 'AddPhoto',
    data() {
        return {
          hasImage: false,
          image: null,
          lowAge: 0,
          highAge: 0
        };
    },
    methods: {
        setImage: function(output) {
          this.hasImage = true;
          this.image = output;
          this.DetectFaces();
        },
        //Calls DetectFaces API and shows estimated ages of detected faces
        DetectFaces: function() {
          this.AnonLog();
          window.AWS.region = "us-east-1";
          
          // Cognito_eye_syncUnauth_Role
          var rekognition = new window.AWS.Rekognition();

          var imageStr = this.image.dataUrl.split("data:image/jpeg;base64,")[1];
          if(!imageStr) {
            imageStr = this.image.dataUrl.split("data:image/png;base64,")[1];
          }
          imageStr = atob(imageStr);
          
          var length = imageStr.length;
          var imageBytes = new ArrayBuffer(length);
          var ua = new Uint8Array(imageBytes);
          for (var i = 0; i < length; i++) {
            ua[i] = imageStr.charCodeAt(i);
          }

          var params = {
            Image: {
              Bytes: imageBytes
            },
            Attributes: [
              'ALL',
            ]
          };
          rekognition.detectFaces(params, function (err, data) {
            if (!err) {
              window.photosList = window.photosList.concat(data);
              this.lowAge = data.FaceDetails[0].AgeRange.Low;
              this.highAge = data.FaceDetails[0].AgeRange.High;
              alert('Os dados da imagem foram registrados com sucesso !');
            }
          });
      },
      //Provides anonymous log on to window.AWS services
      AnonLog: function() {
        // Configure the credentials provider to use your identity pool
        // Inicializar o provedor de credenciais do Amazon Cognito
        window.AWS.config.region = 'us-east-1'; // Região
        window.AWS.config.credentials = new window.AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:9c339152-297d-49b0-9e45-49e3e92aebbd',
        });

        // Make the call to obtain credentials
        window.AWS.config.credentials.get(function () {
          // Credentials will be available when this function is called.
          window.accessKeyId = window.AWS.config.credentials.accessKeyId;
          window.secretAccessKey = window.AWS.config.credentials.secretAccessKey;
          window.sessionToken = window.AWS.config.credentials.sessionToken;
        });
      }

    }
}
</script>
