package com.toyproject.instagram.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class FeedImg {
    private int feedImgId;
    private int feedId;
    private String originFileName;
    private String saveFileName;
    private List<FeedImg> feedImgList;
}
