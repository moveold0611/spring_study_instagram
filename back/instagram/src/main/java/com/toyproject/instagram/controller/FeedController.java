package com.toyproject.instagram.controller;

import com.toyproject.instagram.dto.UploadFeedReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class FeedController {

    @PostMapping("/feed")
    public ResponseEntity<?> uploadFeed(UploadFeedReqDto uploadFeedReqDto) {
        System.out.println(uploadFeedReqDto.getContent());
        uploadFeedReqDto.getFiles().forEach(file -> {
            System.out.println(file.getOriginalFilename());
        });
        return ResponseEntity.ok().body("응답 간거 맞어");
    }
}
