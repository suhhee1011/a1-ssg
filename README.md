# SSG(Static Site Generator)

## SSG is a program that creating html file with a text file.

---

### features

  + command flags
    + -v or -version : show its current version
    + -h or -help : show instruction
    + -i or -input: allow file or folder as input
    + -l or -lang : allow to change lang for html
    + -c or -config : allow to accept json file as a input.
  
  + create html file from input (a text file or all the text file in the input folder)
  + create html file from input (a md file or all the md file in the input folder)

### Prerequisite

- open your favorite terminal
- Make sure you are in the a1-ssg folder
- type the following command

```
npm i -g [code URL]

code URL: https://github.com/jjung99/a1-ssg.git

```

### Uasge

- To see the version

```
 node . -v
```

- To see the help

```
 node . -h
```


+ To generate html file (example commands) 

    + file name "abc.txt"
      ```
       node . -i 'abc.txt'
      ```
      
    + folder name "abc"
      ```
       node . -i abc
      ```    
    + file name "abc.md"
      ```
       node . -i 'abc.md'
      ```
    + file name "abc.md" with franch lang version
      ```
        node . -i 'abc.md' -l fr
      ```
    + config file name "ssg-config.json"
      ```
        node . -c ssg-config.json
      ```


